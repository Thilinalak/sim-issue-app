const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//  user routes
app.use('/api/users', require('./routes/userRoutes'))
//  issues routes
app.use('/api/issues', require('./routes/issueRoutes'))
//  notification routes
app.use('/api/notifications', require('./routes/notificationRoutes'))
//  fcmnotification routes
app.use('/api/fcm-notifications',require('./routes/fcmNotificationRoutes'))


app.listen(port, () => console.log(`Server Running on Port ${port}...`))

