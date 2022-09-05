const db = require('../model')

const userIssues = db.userIssues

// @Desc    Add an issue
// @Method  POST
// @Roote   api/issues/add-issues
exports.addIssue = (req, res)=>{
    const {fullname, mobile,email, password2} = req.body
}