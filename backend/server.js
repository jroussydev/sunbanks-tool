const express = require ("express")
const { Pool } = require("pg")

const app = express()

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "portfolio",
    password: "postgres",
    port: 5432,
})

app.get("/projects", async (req, res) =>
{
    try {
        const result = await
        pool.query("SELECT * FROM project")
        res.json(result.rows)
    } catch (error) {
        console.error(error)
        res.status(500).send("erreur serveur")
    }
})

app.listen(3001, () => {
    console.log("server running on port 3001")
})