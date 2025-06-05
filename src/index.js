//index mai db connect hoo raha hai

import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config();

//async functions will return us a promise
connectDB()
.then(()=>{
    // jab db connect ho jaaye tabh app ko listen karo
    app.listen(process.env.PORT || 7000,()=>{
        console.log(`Server is running at port :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongo db connection fails!!!",err);
});




// jab request se parameters a rahe hoo toh usko req.params() se a






/*

import express from "express"
const app=express();
//IIFE : Immediately invoked Arrow Function
;(  async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // DB toh connect ho gyaa but kyaa pata koi error aa jaaye
        app.on("error",(err)=>{
            console.log("Error: ",err);
            throw err; // cant connectto db
        })

        // if no error listen
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(err){
        console.log("Error: ",err);
        throw err
    }
})()


*/