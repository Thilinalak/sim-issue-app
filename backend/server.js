const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

const port = process.env.PORT || 5000
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port, () => console.log(`Server Running on Port ${port}...`))

