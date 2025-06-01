// mongoose : ODM Object Model Design schema for our enteties like contacts and user used to communicate with mongo db database
const mongoose=require("mongoose");
const connectDb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.CONNECT);
        console.log("DB CONNECTED");
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

module.exports=connectDb