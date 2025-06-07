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
    tier:{
        type:String,
        required:true,
        // enum having the type of value the role has
        // kon kon si values role ke liye allowed hai 
        enum:["free","plus","plat","admin"], 
    },
},{
    // pata chal jaaye a ki kabcreate hua kab update hua
    timestamps:true
})
module.exports=mongoose.model("User",userSchema)