import "dotenv/config"

import express from "express"

import{router as userRouter}from './routes/userRoutes.js'
import {router as postRoutes} from "./routes/postRoutes.js"
import { router as commentRoutes  } from "./routes/commentRoutes.js";
const app=express()

const port=process.env.PORT|| 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    return res.send("Hi from server ")
})

//mounting and routes waali file
//user routes
app.use("/api/user",userRouter)
//post routes
app.use("/api/users/posts",postRoutes)
// comment routes
app.use("/api/users/posts/comments",commentRoutes)

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})

//49:27