/*
    It will just intercept our request 
    and will authenticate the user based on the token and
    if the user is authenticated it will be able to acess the token
*/

const jwt = require("jsonwebtoken");

// in auth middleware we have 3 arguments req,res,next

const verifyToken=(req,res,next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    
    // jab auth header mill jaaye and uski starting bearer se ho then extract its value
    if(authHeader && authHeader.startsWith("Bearer") ){
  
        // split with respect to space and 1st index ki value le lo
        // 0-> bearer, 1->token value
        token=authHeader.split(" ")[1];
        if(!token){
           return res.status(401)
           .json({message:"No token, Auth DENIED"})
        }

        try{
            // jwt verify method to verify our token
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=decoded;
            console.log("the decoded user is ",req.user)
            //now everything is done forward the request
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
