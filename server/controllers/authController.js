const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const register = asyncHandler( async(req,res)=>{

    const {name,email,password}=req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please fill all details ")
    }

 // check if User already exists
 const userExist = await User.findOne({email:email})
 if(userExist){
    res.status(400)
    throw new Error("User already Exists")
 }   

//hash password
const salt = bcrypt.genSaltSync(10)
const hashedPassword = bcrypt.hashSync(password,salt)




//create user
const user = await User.create({name, email,password:hashedPassword})

if(!user){
    res.status(400)
    throw new Error("User not created")
}res.status(200).json({
    id: user._id,
    name:user.name,
    email:user.email,
    token:generateToken(user._id),
   
})
}
)

const login = asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    if( !email || !password){
        res.status(400)
        throw new Error("Please fill all details ")
    }
    //find if user exists in DB
    const user = await User.findOne({email})
    if (user && bcrypt.compareSync(password,user.password)){
        res.status(200).json({
            id: user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin, 
            token:generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("Invalid Credentials")
    }


})

const privateController=(req,res)=>{
    // res.send("Iam Private")
    res.json({
        id:req.user._id,
        user:req.user.name,
        email:req.user.email,
    })
}

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'3d'})
}

module.exports={register,login,privateController}