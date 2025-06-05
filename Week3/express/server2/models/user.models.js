import mongoose from "mongoose"

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
    }
},{
    // secondary object
    timestamps:true
    // created at , updated at

})


export const User=mongoose.model("User",userSchema)

//jab model store hoga it will be stored as users