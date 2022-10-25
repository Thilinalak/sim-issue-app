const {users} = require('../model')
const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


// @Desc     send notifications to all devices
// @Method   POST
// @Route    api/fcm-notifications/send-notification
exports.notification = async(req, res)=>{

    const {registrationToken,title, body} = req.body

    const notification_options = {
        priority: "high",
        timeToLive: 60 * 60 * 24
      };
      let payload = {
        notification: {
          title: title,
          body: body
        }}
      admin.messaging().sendToDevice(registrationToken, payload, notification_options)
      .then( response => {

       res.status(200).send("Notification sent successfully")
       
      })
      .catch( error => {
          console.log(error);
      });

} 

// @Desc     Save Device's FCM Token. SplashScreen.js
// @Method   POST
// @Route    api/fcm-notifications/save-fcmtoken
exports.saveFCMToken = async(req, res)=>{

    const {userid, fcmToken}  = req.body.dataInfo

    const token = await users.findOne({
        where:{ id: userid},
        attributed:['deviceFCMToken']
    })

    if(token){
        if(fcmToken !== token){
           await users.update({deviceFCMToken: fcmToken}, {where:{id:userid}})
           res.status(200).json({message:'ok'})
        }else{
           res.status(200).json({message:'ok'})
        }
    }else{
        await users.update({deviceFCMToken: fcmToken}, {where:{id:userid}})
           res.status(200).json({message:'ok'})
    }
}