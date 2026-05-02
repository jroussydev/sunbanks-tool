const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()

app.use(cors()) // 👈 IMPORTANT

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "portfolio",
  password: "postgres",
  port: 5432,
})

app.get("/projects", async (req, res) => {
  const result = await pool.query("SELECT * FROM projects")
  res.json(result.rows)
})

app.listen(3001, () => {
  console.log("server running on 3001")
})