require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { db } = require('./DB/connection')
const clientRoutes = require('./Routes/client.route')

//Middlewares
const app = express()
db()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my portfolio')
})

//Adding custom middleware
app.use('/api', clientRoutes)

//PORT
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App is listening in  port ${PORT}`)
})
