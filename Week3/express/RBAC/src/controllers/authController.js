//model fetch krr lo
const User = require("../models/userModel.js")
//bcrypt lib to hash our password
const bcrypt = require("bcrypt");
// jwt : when user logges usko sucess pe token dena hai jiii
const jwt=require("jsonwebtoken");

//user ko register karo jab request aaye
//first register the user
const register=async(req,res)=>{

    try{
        //fetch data from the user
        const {username,password,role}=req.body;
        const hashedPass = await bcrypt.hash(password,10);
    
        const newUser=new User({username,password:hashedPass,role})
        // once new user is created save it in the database
        await newUser.save()
    
        res.status(201).json({message:`User registered with username ${username}`})
        
    }catch(err){
         res.status(500).json({message:`Somethin Went Wrong`})
    }


};


const login=async(req,res)=>{
    try{
        //fetch data from the user
        const {username,password}=req.body;
    
        // TO LOGIN we need to find a user with username 
        // since username is unique we can find with the help of username
        const user=await User.findOne({username});

        if(!user){
            return res.status(404).json({message:`User with username ${username} not found ` })
        }

        //if we found the user now match the password with the one that we found
        const isMatch= await bcrypt.compare(password,user.password)

        //agar match nahi kiya toh error de do
        if(!isMatch){
            return res.status(400).json({
                message:" invalid credentials"
            })
        }
        
        //agar match krr gaya jwt token bana ke de do user ko
        const token=jwt.sign(
            //payload
            { id:user._id , role:user.role },
            // secret
            process.env.JWT_SECRET,
            //expiry
            {expiresIn :"1h"}
        );

        res.status(200).json({token})



    }catch(err){
         res.status(500).json({message:`Somethin Went Wrong`})
    }


};


module.exports = {register,login}

/*
    IMPORVED REGISTER LOGIC WITH ALL THE VALIDATIONS

    const register = async (req, res) => {
        try {
            const { username, password, role } = req.body;
            // Check for missing fields
            if (!username || !password || !role) {
                return res.status(400).json({ message: "Username, password, and role are required." });
            }
            // Check for valid role
            const allowedRoles = ["admin", "manager", "user"];
            if (!allowedRoles.includes(role)) {
                return res.status(400).json({ message: "Invalid role. Allowed roles: admin, manager, user." });
            }
            // Check if username already exists
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                return res.status(409).json({ message: "Username already exists." });
            }
            // Hash password
            const hashedPass = await bcrypt.hash(password, 10);
            // Create and save new user
            const newUser = new User({ username, password: hashedPass, role });
            await newUser.save();
            res.status(201).json({ message: `User registered with username ${username}` });
        } catch (err) {
            res.status(500).json({ message: "Something Went Wrong" });
        }
    };
*/

