// const asyncHandler = () => {



// }

export {asyncHandler}

// HIGHER ORDER FUNCTION : a function that will return a function or will accept a function as argument

//function ko funtion mai pass kiya 

/*
    const asyncHandler=()=>{}
    const asyncHandler=(func)=>()=>{}
    const asyncHandler=(func)=>async()=>{}
*/

const asyncHandler = (fn) => async (req,res,next) =>{
    try{
        await fn(req,res,next)
    }catch(err){
        res.status(err.code ||500).josn({
            sucess:false,
            message:err.message
        })
    }
}