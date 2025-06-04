const express=require("express")
const router=express.Router()

//middlewares
// user authetic hai yaa nahi hai
const auth=function(req,res,next){
    console.log("I AM inside auth wala middleware");
    
    //making a dummy user to make things easy
    //valid user pada hua hai
    req.user={userId:1,role:"Admin"};
    if(req.user){
        // if a valid user is there in the request
        // then proceed to next middleware
        next();
    }else{
        res.json({
            sucess:false,
            message:"Not a valid user"
        })
    }
}

const isStudent=function(req,res,next){
    console.log("i am inside student waala middleware");
    if(req.user.role=="student"){
        next()
    }else{
        res.json({
            sucess:false,
            message:"This route is only for Students"
        })
    }
}

const isAdmin=function(req,res,next){
    console.log("i am inside isAdmin waala middleware");
    if(req.user.role=="Admin"){
        next()
    }
    else{
        res.json({
            sucess:false,
            message:"This route is only for admins"
        })
    }
}



//routes
// 1) student path , authentication check , agar student hai
router.get("/student" , auth , isStudent,(req,res)=>{
    console.log("Hi student welcome here, I AM INSIDE STUDENT ROUTE");
    res.send("Student specific page")
})

router.get("/admin" , auth , isAdmin,(req,res)=>{
    console.log("Hi ADMIN welcome here, ADMIN ACCESS");
    res.send("ADMIN specific page")
})



module.exports=router