const express = require('express')
const router = express.Router()
const issueController = require('../controllers/issueController')
const {jwtAuthenticate} = require('../middleware/authMiddleware')

router.post('/add-issue',jwtAuthenticate, issueController.addIssue)
router.get('/',issueController.getIssues)

module.exports = router