const jwt = require('jsonwebtoken')
const db = require('../model')

const User  = db.users

exports.jwtAuthenticate  = async(req, res, next)=>{
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]

            // Verify token 
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from token
            req.user = await User.findByPk(decoded.id)
            next()
        } catch (err) {
            console.log(err)
            res.status(200).json({error: "Not Authorized Invalid Token !"})
        }
    }

    if(!token){
        res.status(200).json({error: 'Not Authorized No Token !'})
    }
}


