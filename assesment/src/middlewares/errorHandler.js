const errorHandler=(req,res,err,next)=>{
    console.log("there is some error that occured");
    res.status(500).json({
        staus:500,
        message:"Something went wrong",
        error:err.message
    })
}



export default errorHandler