const {notifications, userIssues} = require('../model')

// @Desc    Add notification
// @Method  POST
// @Route   /api/notifications/add-notification
exports.addNotification  = async(req, res)=>{

    const {notificationText, userIssueId} = req.body

    if(!notificationText){
        res.status(400).send('The Notification Text must Needed! ')
    }else{
        
        let notification = await notifications.create({
            notificationText,
            isRead:false,
            userIssueId
        })
        notification ?
            res.status(201).json({notification: notification})
        :   res.status(404).json({error: "notification Not saved"})
    }

}

// @Desc    Show notification to user
// @Method  GET
// @Route   /api/notifications/get-notification/:notificationid
exports.getNotification = async(req, res)=>{

    const notificationId = req.params.notificationid

    const allNotifications = await notifications.findAll({
        where :{ userIssueId: notificationId, isRead: false},
        attributes: ["notificationText"]
    })

    allNotifications.length != 0 ? 
    res.status(200).json({notifications : allNotifications})
    : res.status(200).json({error: 'No Notifications'})
}

// @Desc    User press notification and issue completed
// @Method  PUT
// @Route   /api/notifications/issue-completed/:issueid
exports.issueCompleted = async(req, res)=>{
    
    const issueID = req.body.issueid
    const updatedNotification  =  await notifications.update({isRead : true},{where:{ userIssueId: issueID}})
    const updateUserIssue = await userIssues.update({isIssueComplete: true}, {where:{id:issueID}})
    
    updatedNotification || updateUserIssue ? 
        res.status(200).json({message: 'Your Issue have been fixed successfully Thank You!'})
    :   res.status(200).json({error:'Your Issue still Proccessing!'})    
}