const express = require('express')
const router = express.Router()
const issueController = require('../controllers/issueController')

router.post('/add-issue', issueController.addIssue)

module.exports = router