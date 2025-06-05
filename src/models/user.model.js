import mongoose ,{Schema} from "mongoose"

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,// will get this from cloudinary link
        required:true,
    },
    coverImage:{
        type:String,// will get this from cloudinary link
    },
    // added to impliment soft delete here
    isDeleted: {
        type: Boolean,
        default: false,
    },
})

export const User=mongoose.model("User",userSchema)