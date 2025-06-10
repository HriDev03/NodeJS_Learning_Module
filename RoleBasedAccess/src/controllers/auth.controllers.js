const User = require("../models/users.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try{
        const{username,password, tier}=req.body;
        
        if(!username||!password||!tier){
            return res.status(400).json({ message:"All fields are required"});
        }

        const hashedPass=await bcrypt.hash(password,10);
        const newUser = new User({ username,password:hashedPass,tier});
        await newUser.save();
        res.status(201).json({ message: `User registered with username ${username}` });
    }catch(err){
        console.error("Register error:", err);
        res.status(500).json({ message: "Server error during registration" });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: `User with username ${username} not found` });
        }
        const isMatch=await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ message:"invalid password dalla hai"});
        }
        const token = jwt.sign({id: user._id, tier:user.tier},process.env.JWT_SECRET,{expiresIn:"1d"});
        res.status(200).json({ token });
    }catch(err){
        console.error("Login error:", err); // Optional: log this too
        res.status(500).json({ message: "Server error during login" });
    }
};
module.exports = { register, login };
