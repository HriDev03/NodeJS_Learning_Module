import mongoose from "mongoose"

const todoSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true,

    },
    complete:{
        type:Boolean,
        //default value kyaa hogi
        default:false
    },
    // yeh jo major to do banaya hai yeh kisuser nebanaya hai?
    // yeh field kisne banaya hai yeh mujhe pata hai
    // i want to know which user created this so will have this refrence here
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    // ek bade  box ke andar hii toh sub todos rahege
    subTodos:[
        {
            // ek special type chahiye objectId
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ]// array of sub todos
},{timestamps:true})

export const Todo=mongoose.model("Todo",todoSchema)