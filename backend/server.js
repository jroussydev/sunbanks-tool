const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()

//DEBUG
//console.log("SERVER FILE LOADED - POST VERSION")

app.use(cors())
app.use(express.json())

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "portfolio",
  password: "postgres",
  port: 5432,
})
//PROJETS *
app.get("/projects", async (req, res) => {
  const result = await pool.query("SELECT * FROM projects")
  res.json(result.rows)
})
//ROUTE NEW
app.post("/projects", async (req, res) => {
  const { name, github_url, live_url, stack } = req.body

  const result = await pool.query(
    "INSERT INTO projects (name, github_url, live_url, stack) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, github_url, live_url, stack]
  )

  res.json(result.rows[0])
})

//ROUTE UPDATE
app.put("/projects/:id", async (req, res) => {
  const { id } = req.params
  const { name, github_url, live_url, stack } = req.body

  try {
    const result = await pool.query(
      `UPDATE projects
      SET name = $1,
      github_url = $2,
      live_url = $3,
      stack = $4,
      WHERE id = $5
      RETURNING *`,
      [name, github_url, live_url, stack, id]
    )

    if (result.rows.length === 0){
      return res.status(404).json({ error: "Projet introuvable"})
    }

    res.json(result.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erreur serveur"})
  }
})

//ROUTE DELETE
app.delete("/projects/:id", async (req, res) => {
  const {id} = req.params

  try {
    await pool.query("DELETE FROM projects WHERE id = $1", [id])
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.status(500).send("Erreur serveur")
  }
})

app.listen(3001, () => {
  console.log("server running on port 3001")
})