const mongoose=require("mongoose");
const contactSchema=mongoose.Schema(
    {   
        /*
            associate the contact with the user id thats creating it 
            soo that only a valid user can create it
        */
        //this id is created in the mongodb thats where this id is present
        user_id:{
            type:mongoose.Schema.Types.ObjectId,
            //when ever we create a create a new contact we need to always have a user id
            required:true,
            ref:"User"
        },
        name:{
            type:String,
            required:[true,"Please add the contact name"],
        },
        email:{
            type:String,
            required:[true,"Please add the contact email address"],
        },
        phone:{
            type:String,
            required:[true,"Please add the contact phone number"],
        },
        isDeleted:{
            type: Boolean,
            default: false,
        },
    },
    {
        timestamp:true,
    }
);

module.exports=mongoose.model("Contact",contactSchema)