import mongoose from mongoose

// todo ke andar kaafi saare sub todos aaye ge

const subtodoSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

mongoose.model("SubTodo",subtodoSchema)