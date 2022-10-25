const router = require('express').Router()
const fcmNotification = require('../controllers/fcmNotificationController')

router.post('/save-fcmtoken',fcmNotification.saveFCMToken)
router.post('/send-notification',fcmNotification.notification)

module.exports = router