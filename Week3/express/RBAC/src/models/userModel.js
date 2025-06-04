const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    
    username:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
    },

    role:{
        type:String,
        required:true,
        // enum having the type of value the role has
        // kon kon si values role ke liye allowed hai 
        enum:["admin","manager","user"], 
    },
},{
    timestamps:true//created at + updated at ke baaremai information
})

module.exports=mongoose.model("User",userSchema)