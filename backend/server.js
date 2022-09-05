const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express()

// middleware
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({extended: true}))


// user route
app.use('/api/users', require('./routes/userRoutes'))
// // issues route
app.use('/api/issues', require('./routes/issueRoutes'))


app.listen(port, () => console.log(`Server Running on Port ${port}...`))

