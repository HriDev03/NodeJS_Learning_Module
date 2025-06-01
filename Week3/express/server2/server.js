const express=require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");

const dotenv=require("dotenv").config();

const app=express();


const port=process.env.PORT||3000;

connectDb();


//adding middleware

//body parser middleware

//when we are passing data to server from the client we need a body parser
// which can be done by a middleware
// this will give us a middleware because of which we can parse data from the client to the server
app.use(express.json()); 

//routing versioning 
//contact related tasks
app.use("/api/contacts", require("./routes/contactRoutes"));

//we are going to register the users
// users will login 
app.use("/api/users", require("./routes/userRoutes"));

//error handler middlewares
app.use(errorHandler)

//dotenv help us o fetch values from the .env file with the help of process module
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})


// to test our api's we need an http client-->1)thunder client, 2)postman