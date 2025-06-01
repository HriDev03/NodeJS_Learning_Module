const asyncHandler=require("express-async-handler");
const User=require("../models/userModel")

const bcrypt=require("bcrypt");

// Post Register a User
// route POST/api/users/register
// access public

const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
       res.status(400) 
       throw new Error("All Fields are required");
    }
    //firdt checkk if user is present already
    const userAvailable=await User.findOne({email});

    if(userAvailable){
        //bad request
        res.status(400) 
        throw new Error("User Already Registered , Register");
    }

    // now user is not present so humm ek naya banaye ge
    // we dont store raw password, so we need to hash it

    //1 Create a hash password---> it will provide us a promise
    // bcrypt.hash(normal password,rounds of hashing)
    const hashedPassword=await  bcrypt.hash(password,10);
    console.log(hashedPassword);
    //creating a new user now
    const user=User.create({
        name,
        email,
        password:hashedPassword,
    });
    console.log(`User Created ${user}`);
    
    //if user is creaed sucessfully
    if(user){
        res.status(201).json({_id:user.id,email:user.email});
    }else{
        res.status(400);
        throw new Error("User data not valid");
    }
    res.json({message:"Register the user"})
})

// Post Register a User
// route POST/api/users/login
// access public
const loginUser=asyncHandler(async(req,res)=>{
    res.json({message:"Login the user"})
})

// Post Current User Info
// route POST/api/users/current
// access private
const currentUser=asyncHandler(async(req,res)=>{
    res.json({message:"Current User Information"})
})

module.exports={registerUser,loginUser,currentUser}

// 1:11:09