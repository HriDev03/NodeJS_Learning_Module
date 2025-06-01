const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    username:{
        type:String,
        require:[true,"Please add the user name"]
    },
    email:{
        type:String,
        require:[true,"Please add the user Emial"],
        unique:[true,"Email address already taken"]
    },
    password:{
        type:String,
        require:[true,"Please add the user Password"],
    }
},{
    timeStamp:true,
});

module.exports=mongoose.model("User",userSchema);