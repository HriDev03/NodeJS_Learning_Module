//import { createUserService, getAllUsersService, getUserByIdService, updateUserService, deleteUserService} from "../models/userModel";
import { createUserService, getAllUsersService, getUserByIdService, updateUserService, deleteUserService } from "../models/userModel.js";
import pool from '../config/db.js';


// standard response function, iss way mai response milega
const handleResponse = ( res , status , message , data = null )=>{
    res.status(status).json({
        status,
        message,
        data
    })
}


// --------------------------------------------------------------------------------------------------

//create new user
export const createUser = async (req,res,next) => {
    const {name,email} = req.body;
    try{
        const newUser = await createUserService(name,email);
        handleResponse(res,201,"User Created Sucessfully",newUser)
    }catch(err){
        // passing errors to the error handling middlewares
        next(err)
    }

}

// --------------------------------------------------------------------------------------------------

// Getting all users
export const getAllUsers = async(req,res,next)=>{
    try{
        const allUsers = await getAllUsersService();
        handleResponse(res,200,"Fetched all Users",allUsers)
    }catch(err){
        next(err)
    }
}


// --------------------------------------------------------------------------------------------------
// Getting  user By ID
export const getUserById = async (req, res, next) => {
    try{
        const user = await getUserByIdService(req.params.id); // Use the service
        if (!user) {
            return handleResponse(res, 404, "User Not Found, Bad Request");
        }
        handleResponse(res, 200, "Got User by ID", user);
    } atch (err) {
        next(err);
    }
};

// --------------------------------------------------------------------------------------------------
// Update User
export const updateUser = async(req,res,next)=>{
    try{
        const {name,email}=req.body;
        const updatedUserr=await updateUserService(req.params.id,name,email)
        if(!updatedUserr){
            return handleResponse(res,404,"User not found");
        }
        handleResponse(res,200,"User Updated",updatedUserr)
    }catch(err){
        next(err);
    }
}  
  
// --------------------------------------------------------------------------------------------------
// DELETE User
export const deleteUser = async(req,res,next)=>{
    try{
        const deletedUserr=await deleteUserService(req.params.id)
        if(!deletedUserr){
            return handleResponse(res,404,"User not found Cant delete it");
        }
        handleResponse(res,200,"User Deleted",deletedUserr)
    }
    catch(err){
        next(err);
    }
}
