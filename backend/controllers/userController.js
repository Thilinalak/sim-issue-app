const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../model");

const User = db.users;

// @Desc    Register user
// @Method  POST
// @Roote   api/users/register
exports.registerUser = async (req, res) => {
  const { fullname, mobile, email, password1 } = req.body;
    console.log('got Request');
    console.log(req.body);
    // res.json({ok:'ok'})

  // Check user already exsits in db
  const userExsits = await User.findOne({
    where: { email: email },
  })

  if(userExsits){
    res.status(200).json({Error: 'User Already Exsits !'})
  }else{
    // Hashing password
    const hashedPassword = await bcrypt.hash(password1,await bcrypt.genSalt(10))

    // Register new user
    const newUser = await User.create({
        fullname,
        mobile,
        email,
        password: hashedPassword
    })

    if(newUser){
        const registeredUserInfo = await User.findOne({
            where:{id: newUser.id},
            attributes:{exclude: ['password']}
        })
        res.status(201).json({
            message: 'User Registered Successfully !',
            user: registeredUserInfo,
            userToken: generateToken(newUser.id, newUser.fullname)
        })
    }else{
        res.status(200).json({ Error: "User Not Registerd !" });
    }
  }
};

// @Desc    Login user
// @Method  POST
// @Route   api/users/login
exports.loginUser = async(req, res)=>{
    const {username, password} = req.body
    
    // Check user from DB
    const user = await User.findOne({
        where:{email: username}
    })
    if(user && (await bcrypt.compare(password,user.password))){
        const userInfo = await User.findOne({
            where :{id: user.id},
            attributes:{exclude: ['password']}
        })

        res.status(200).json({
            message: "User Authenticated and Logged In !",
            user: userInfo,
            userToken : generateToken(user.id, user.fullname)
        })
    }else{
        res.status(200).json({Error: 'Invalid Credentials !'})
    }
}


// Generate JWT
const generateToken =(id, fullname) =>{
    return jwt.sign({id,fullname},process.env.JWT_SECRET,{expiresIn:'30d'})
}
