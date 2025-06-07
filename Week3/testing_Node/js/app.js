import express from "express"
const app=express()

app.get('/test',(req,res)=>{
    res.send("HELO JIIIIII");
})

app.post('/users',(req,res)=>{

})

export default app;