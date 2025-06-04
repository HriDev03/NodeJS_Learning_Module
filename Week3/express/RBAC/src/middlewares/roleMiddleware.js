const authorizeRole=(...allowedRoles)=>{
    return (req,res,next)=>{
        // if users role is not present in the allowed roles array then its a bad request
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({message:"Access Denied"});
        }
        // if it includes 
        next();
        // agar agla middlerware ko call karo verna callback function ko
    }
}

module.exports=authorizeRole;