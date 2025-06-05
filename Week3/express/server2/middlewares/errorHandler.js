//hamara error lega and will transform it in json format
const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500;
    switch(statusCode){
        case 400:
            res.json({
                title:"Validation Failed",
                message:err.message,
                statuscode:err.statusCode
            });
        break;

        case 401:
            res.json({
                title:"UNAUTHORISED",
                message:err.message
            });
        break;
        
        case 403:
            res.json({
                title:"FORBIDDEN",
                message:err.message
            });
        break;
            
        case 404:
            res.json({
                title:"NOT FOUND",
                message:err.message
            });
        break;

        case 500:
            res.json({
                title:"Internal Server Error",
                message:err.message
            });
        break;

        default:
            console.log("No error all good");
            break;
    }
};
module.exports= errorHandler;