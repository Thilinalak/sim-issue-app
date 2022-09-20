const express = require('express')
const router = express.Router()
const issueController = require('../controllers/issueController')

router.post('/add-issue', issueController.addIssue)
router.get('/', issueController.getIssues)

module.exports = router