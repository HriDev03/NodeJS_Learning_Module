const User = require("../models/users.model.js")
const bcrypt = require("bcrypt");
// jwt : when user logges usko sucess pe token dena hai jiii
const jwt=require("jsonwebtoken");


//user ko register karo jab request aaye
//first register the user
const register=async(req,res)=>{
    try{
        //fetch data from the user
        const {username,password,tier}=req.body;
        const hashedPass = await bcrypt.hash(password,10);
        const newUser=new User({username,password:hashedPass,tier})
        await newUser.save()
        res.status(201).json({message:`User registered with username ${username}`})
    }catch(err){
         res.status(500).json({message:`Error Aaa gaya jii`})
    }
};


const login=async(req,res)=>{
    try{
        const {username,password}=req.body;
        //agar user exist karta hai login kara do
        const user=await User.findOne({username});
        if(!user){
            return res.status(404).json({message:`User with username ${username} not found ` })
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({
                message:" invalid credentials"
            })
        }
        //token de do 
        const token=jwt.sign(
            { id:user._id , tier:user.tier },//payload
            process.env.JWT_SECRET,//secret
            {expiresIn :"1d"}//expiry
        );
        res.status(200).json({token})
    }catch(err){
        res.status(500).json({message:`Somethin Went Wrong`})
    }
};
module.exports = {register,login}