const express=require("express");
const { registerUser, loginUser, currentUser } = require("../controllers/userControllers");
const validateToken = require("../middlewares/validateTokenHandler");

const router=express.Router();

// User Registered
router.post("/register",registerUser)

//User LoggedIn
router.post("/login",loginUser)

//Current User Info
router.get("/current", validateToken ,currentUser)

module.exports=router;