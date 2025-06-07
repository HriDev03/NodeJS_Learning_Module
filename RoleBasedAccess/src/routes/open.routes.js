// yaha prr hamara user authenticate hoga 
//they will login and register
const express=require("express");
const router=express.Router();
const {register,login} =require("../controllers/auth.controllers")
//logics in the controllers
router.post("/register",register);
router.post("/login",login);




module.exports=router;