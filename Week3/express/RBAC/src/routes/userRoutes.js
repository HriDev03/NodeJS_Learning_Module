// wehave different routes here like for admin , for user and for manager

const express=require("express");
//fetching the auth middleware
const verifyToken = require("../middlewares/authMiddleware");

const router = express.Router();

// Protected Roles Hai jiii
const authorizeRole=require("../middlewares/roleMiddleware")

//only for admins
// role admin and loggedIn user
router.get("/admin",verifyToken,authorizeRole("admin"),(req,res)=>{
    res.json({message:"Welcome Admin"})
})


//only for manager
router.get("/manager",verifyToken,authorizeRole("admin","manager"),(req,res)=>{
    res.json({message:"Welcome Managerr"})
})

// for all normal users
router.get("/user",verifyToken,authorizeRole("admin","manager","user"),(req,res)=>{
    res.json({message:"Welcome Userr"})
})


module.exports=router;