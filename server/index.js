const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const {sequelize, connect} = require('./database/sequelize')

//Middleware
app.use(express.json())
app.use(cors())

//Endpoints
app.get('/projects', async (req, res) => {
  let data = await sequelize.query(`SELECT * FROM projects`)
  res.status(200).send(data)
})
app.post('/clockIn', async (req, res) => {
  let {punch, project, user} = req.body
  await sequelize.query(`
  INSERT INTO time_punches (emp_id, project_id, punch_in)
  VALUES (${user}, ${project}, '${punch}')`)
  res.status(200).send('success')
})

sequelize.connect

const {PORT} = process.env
app.listen(5433, () => console.log(`Running away on port ${5433}`))