const asyncHandler=require("express-async-handler");
const User=require("../models/userModel")
const jwt=require("jsonwebtoken")



const bcrypt=require("bcrypt");

// Post Register a User
// route POST/api/users/register
// access public

const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
       res.status(400) 
       throw new Error("All Fields are required");
    }
    //first checkk if user is present already
    const userAvailable=await User.findOne({email});
    // if user is already present thro an error
    if(userAvailable){
        //bad request
        res.status(400) 
        throw new Error("User Already Registered , Register");
    }

    // now user is not present so humm ek naya banaye ge
    // we dont store raw password, so we need to hash it

    //1 Create a hash password---> it will provide us a promise
    // bcrypt.hash(normal password,rounds of hashing)
    const hashedPassword=await  bcrypt.hash(password,10);
    console.log(hashedPassword);
    
    //creating a new user now
    const user=User.create({
        name,
        email,
        password:hashedPassword,
    });

    console.log(`User Created ${user}`);
    
    //if user is creaed sucessfully
    // now i dont want to send the complete used as itll also have its hashed password
    if(user){
        res.status(201).json({_id:user.id,email:user.email});
    }// in case of problem throw an error
    else{
        res.status(400);
        throw new Error("User data not valid");
    }
    res.json({message:"Register the user"})
})

// -----------------------------------------------------------------------------------------------------------------------------------------
// MY LOGIN ENDPOINT : when client is sending the email address and passord , we need to match the assword and will give the token to the user
// Post Login a User
// route POST/api/users/login
// access public

/*


    authentication : We will provide some endpoints that helps user to login and register 
    and once they login they will get a login token using hich they can manage their contacts

    now create an endpoint for the login soo that if the user is logged in create an access token
    for that we use JWT

    IT consists of three parts
    1) Header Algorithm of the token
    2) Payload -> the data that we are sending (Here user Information)
    3) Signature Varification
*/



const loginUser=asyncHandler(async(req,res)=>{
    //when ever a user is tryping to login first fetch the email address and the password
    const{email,password}=req.body;
    //check if email and password is present
    if(!email||!password){
        res.status(400)
        throw new Error("All fields are mandetory");
    }
    
    // now we have a valid email and password
    
    //1) check if user exists for that email
    const user=await User.findOne({email});
    
    //2) agar user mill gaya ,Password ko match karo,that we got from the client and that we stored in the db
    //compair password with hashed password

    if(user && (await bcrypt.compare(password,user.password))){
        
        //creating access token---> jwt has this method of sign
        // it will have a few parameters
        const accessToken=jwt.sign(
            // this is my payload the info that im sending
            {
                user:{
                    username:user.username,
                    email:user.email,
                    id:user.id
                },
            },
            //my jwt secret
            process.env.ACCESS_TOKEN_SECRET,
            //expiration time: after token is expired user should not be able to access the token in order to call the api
            {expiresIn:"15m"}
        );

        // if theris a valid user and password matches give it a access token
        res.status(200).json({accessToken});
    }else{
        // email or password is not valid
        res.status(401)
        throw new Error("Email or Password is not valid")
    }
})

/*
    get Current User Info
    route get/api/users/current
    access private

    to access this the client need to pass the access token so that only the authentic client can access it

*/
const currentUser=asyncHandler(async(req,res)=>{
    res.json(req.user)
})

// Delete a User
// route DELETE /api/users/:id
// access private (should be protected in routes)
const deleteUser=asyncHandler(async (req,res)=>{
    const user=await User.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("User not found");
    }
    //agar user already delete ho gyaa hai toh error
    //true: if will run 
    if(user.isDeleted){
        res.status(400);
        throw new Error("User already deleted");
    }
    //user ko delete mark krr do
    user.isDeleted = true;
    await user.save();
    res.status(200).json({ message: "User soft deleted successfully" });
});


// Restore a User
// route PATCH /api/users/:id/restore
// access private (should be protected in routes)
const restoreUser = asyncHandler(async (req, res) => {
    const user=await User.findById(req.params.id);
    if (!user){
        res.status(404);
        throw new Error("User not found");
    }
    if (!user.isDeleted){// false : true
        res.status(400);
        throw new Error("User is not deleted");
    }
    //user isDelete jo false mark karoo
    user.isDeleted = false;
    //save in database
    await user.save();
    res.status(200).json({ message: "User restored successfully" });
});

// route: GET /api/users?page=1&limit=10
const getUsers = asyncHandler(async (req, res) => {
    // default page = 1 records first page se show karege
    const page = parseInt(req.query.page) || 1; 
    // default limit = 10 records hrr document mai
    const limit = parseInt(req.query.limit) || 10; 
    // kon se records ko skip karna padega before showing the docs we wanted
    const skip = (page - 1) * limit;        
    const users = await User.find({ isDeleted: false }) .skip(skip).limit(limit)
    //avoid sending password
    .select('-password'); 

    //total number of users excluding soft deletied ones
    const totalUsers = await User.countDocuments({ isDeleted: false });

    res.json({
        total: totalUsers,
        page,
        totalPages: Math.ceil(totalUsers / limit),
        users,
    });
});

module.exports={registerUser,loginUser,getUsers,currentUser,deleteUser,restoreUser}