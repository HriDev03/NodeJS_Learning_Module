
const jwt = require("jsonwebtoken");
const verifyToken=(req,res,next)=>{
    let token;
    //token ko fetch kiya form header
    let authHeader = req.headers.Authorization || req.headers.authorization;
    //split karo fetch token
    if(authHeader && authHeader.startsWith("Bearer") ){
        token=authHeader.split(" ")[1];
        if(!token){
           return res.status(401)
           .json({message:"No token, Auth DENIED"})
        }
        try{
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=decoded;
            console.log("the decoded user is ",req.user)
            next()
        }catch(err){
            res.status(400).json({message:"Token is not valid"})
        } 
    }
    else{
        return res.status(401)
        .json({message:"No token, Auth DENIED"})
    }

}

module.exports=verifyToken
