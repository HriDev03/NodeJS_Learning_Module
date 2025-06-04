const express=require("express");
const dotenv=require("dotenv");
const dbConnect = require("./config/db");
const authRoutes=require("./routes/authRoutes")
const userRoutes=require("./routes/userRoutes")

//accessing variables defined in .env file
dotenv.config();

const app=express();

//middlewares
app.use(express.json());

//routes
//login and register
app.use("/api/auth",authRoutes)

// role base access control
/*
    -----------------------------------------------------------------
    MAKE THESE ROUTES PROTECTED
    ------------------------------------------------------------------
    Make them such way that only if the
    user is authenticated then only it is able to access these routes

    do it based on the acess token




*/

app.use("/api/user",userRoutes)

//server start karo
const port = process.env.PORT || 7002;

dbConnect();

app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`);
})