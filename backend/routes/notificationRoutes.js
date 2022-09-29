const express = require('express')
const notificationControlller = require('../controllers/notificationControlller')
const {jwtAuthenticate} = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/add-notification',notificationControlller.addNotification)
router.get('/get-notification/:notificationid',jwtAuthenticate,notificationControlller.getNotification)
router.put('/issue-completed',jwtAuthenticate,notificationControlller.issueCompleted)


module.exports = router