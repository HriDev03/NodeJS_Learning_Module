import mongoose from "mongoose"
import jwt from "jsonwebtoken";
import bcrypt from  "bcrypt"



const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },
    emial:{
        type: String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    // added to impliment soft delete here
    isDeleted: {
        type: Boolean,
        default: false,
    },
})


export const User=mongoose.model("User",userSchema)

