//bring in prisma and cookie

const cookieToken=require('../utils/cookieToken')
const prisma =  require('../prisma/index')

/*
sign up the user
database is in another continent
flow : 

    
    1) take input from the user
    2) usko json token do , uski cookie mai token ko store karo

*/

exports.signup = async (req,res,next)=>{
    try {
        //extract information from request body
        const {name,email,password}=req.body;
        //check karo for errors
        if(!name || !email ||!password){
            throw new Error("Please Provide all the fields");
        }

        //check krr liye sabhi abb user banao
        const user=await prisma.user.create({
            data:{
                name,
                email,
                password,
            }
        })
        //send user a token
        cookieToken(user,res)

    }catch(error){
        throw new Error(error); 
    }
}

// login user
// data base is in another continent
exports.login = async (req,res,next)=>{
    try {
        //take info from the user
        // compair the password and login
        const {email,password}=req.body

        if(!email || !password){
            throw new Error("Please Provide email and password")
        }

        //find a user based on email
        const user= await prisma.user.findUnique({
            where:{
                email
            }
        })

        //when there is no user
        if(!user){
            throw new Error("User not found")
        }
        //password not match
        if(user.password !== password){
            throw new Error("Password not matching, Password is incorrect")
        }
        //user is there and validated
        cookieToken(user,res)

    }catch(error){
        throw new Error(error)
    }
}

//log out
exports.logOut= async (req,res,next)=>{
    // need to manuplate the cookie throw the server
    //clear cookies etc ...
    try{
        //clear the cookie whose name is token
        //nuilt in method hai yeh
        res.clearCookie('token')

        res.status(200).json({
            message:"User Logged Out"
        })

    }catch(error){
        throw new Error(error)
    }
}


