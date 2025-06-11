const express=require("express");
const app=express();
const cookieParser=require("cookie-parser")
require('dotenv').config()
const userRouter = require("./routes/userRoutes") 
const postRouter=require("./routes/postRoutes")

//regular middleware
//middleware : something that happens in between
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// we need middleware for cookies whebever a request comes we will catch it
app.use(cookieParser())

app.use('/user',userRouter)
app.use("/post",postRouter)

app.get('/',(req,res)=>{
    res.send("Default route pe aa gye")
})

app.listen(3000,()=>{
    console.log("server running on port 3000");
})