const prisma = require("../prisma/index")
const jwt=require('jsonwebtoken')

//every middleware once its done its job needs next
// kya loggedin hai 
const isLoggedIn= async(req,res,next)=>{
    try{
        //fetching token
        const token=req.cookies.token
        if(!token){
           throw new Error("Please LogIn")
           //ideal case : send a response and close next
        }
        //decode the token
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        //jo bhi store kiya hoga then cool
        req.user=await prisma.user.findUnique({
            where:{
                id:decoded.userId
            }
        })
        //aur checks bhi krr sakte hai
        //when done with everything  , shift the control to othermiddlewares, or callbacks
        next()

    }catch(error){
        throw new Error(error)
    }
}

module.exports=isLoggedIn
