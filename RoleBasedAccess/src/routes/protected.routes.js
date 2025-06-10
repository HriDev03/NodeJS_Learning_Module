// admin, plat,plus,free
const express=require("express");

const verifyToken=require("../middlewares/authentication");
const router=express.Router();
const authorizeRole=require("../middlewares/authorization")

router.get("/admin",verifyToken,authorizeRole("admin"),(req,res)=>{
    res.json({message:"Welcome Admin"})
})

router.get("/free",verifyToken,authorizeRole("admin","free","plat","plus"),(req,res)=>{
    res.json({message:"Welcome user"})
})

router.get("/plus",verifyToken,authorizeRole("admin","plat","plus"),(req,res)=>{
    res.json({message:"Welcome plus user"})
})

router.get("/plat",verifyToken,authorizeRole("admin","plat"),(req,res)=>{
    res.json("Only platinum users and admin coul daccess")
})


module.exports=router;