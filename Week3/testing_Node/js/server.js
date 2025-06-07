// import express from "express"
// const app=express()
// app.get('/test',(req,res)=>{
//     res.send("HELOO JIIIII")
// })
// app.listen(8080,()=>{
    //     console.log("listening to port 8080");
    // })
 
//PROBLEM
//dont want to bind it to a port, want it to port where ever it wants to , want supertest to bind it where ever it want to

import app from './app';
app.listen(8080,()=>{
    console.log("Listening on port 8080");
})
