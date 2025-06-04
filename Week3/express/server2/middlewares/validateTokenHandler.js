const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");

const validateToken=asyncHandler(async(req,res,next)=>{
    //token is sent in header section or in the auth field
    //header : Aythorization-> Bearer accessToken...
    let token;
    let authHeader=req.headers.authorization||req.headers.Authorization
    if(authHeader && authHeader.startsWith("Bearer") ){
        token=authHeader.split(" ")[1];
        //now verify the token
        // TOKEN, JWT_SECRET , 
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            // if token is correct we will get the correct information
            req.user=decoded.user;
            next();
            //intercept the request , decode the token and add the user information on req.body()
        });

        // token not provided or user is not authorised
        if(!token){
            res.status(401);
            throw new Error("User is not Authorized")
        }
    }
})

module.exports=validateToken;