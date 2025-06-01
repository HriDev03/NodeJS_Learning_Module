const express=require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userControllers");

const router=express.Router();

// User Registered
router.post("/register",registerUser)

//User LoggedIn
router.post("/login",loginUser)

//Current User Info
router.get("/current",currentUser)


module.exports=router;