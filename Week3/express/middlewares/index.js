const express=require('express')
const app=express()
const port=50001
const router=express.Router();
//in built middleware made on top of morgan
// used for logging
const logger=require("morgan");

// multer is a node package use to upload files to the server
const multer=require("multer")

//upload mai bata diya ki konsi destination pe files store karnaa
const upload=multer({dest:"./public/uploads"})



//inbuilt middle ware
// jo request ki body mai data aata hai usse parse karne ke liye we use res.json()
//HOW loading middleware into the app : app.use()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//express.static(): if we want to serve the static files to the client

// agar json bheju toh json mai convert karo, data changing , fetching key value pairs
// to receive data stream from client to the server

/*    

    Jab bhi client (jaise HTML form) se data application/x-www-form-urlencoded format me bheja jaata 
    hai (jaise form submit karte ho), toh Express us data ko parse kar ke req.body me JavaScript object bana deta hai.
    
    {extended:true} ka matlab hai ki aap nested objects bhi bhej sakte 
    ho (arrays ya objects ke andar objects).

*/

/*
// CUSTOM MIDDLEWARE -> logging, auth , validation
// req-------> logg--->auth-->validation--->res
/*
    syntax of using middleware : 
    const myLogger=function(req,res,next){
        console.log("Logged");
        next()
    }
    
    ---------> agar iss waale middleware ke baad aage koi middleware ko 
    execute karna hai, if there is no middleware then it 
    will represent route handler
*/

// Middlewares : Logging--->auth--->validation
// Creation of a middlewares
/*
const loggingMiddleware=function(req,res,next){
    console.log("------------------------------------------");
    console.log("Logging ksrr raha hu");
    // jab yeh middleware khatam ho jaaye ga tabh dusre middle ware ko call karo
    next();
}

const authMiddleware=function(req,res,next){
    console.log("------------------------------------------");
    console.log("Auth krr raha hu");
     next();
     //eNDING THE REQUEST RESPONSE CYCLE
    res.send("RESPONSE RETURN HO GYAA AAGE NAHI JAANA")
}


const validationMiddleware=function(req,res,next){
    console.log("------------------------------------------");
    console.log("Validation krr raha hu");
    //agar aae koi middleware hai toh waha prr jaao 
    // agar nahi hai toh route handler pe jaao
    next();
}

//using them--> application level middlewares
app.use(loggingMiddleware);
app.use(validationMiddleware);
app.use(authMiddleware);




// write middlewares before all these
//hrrr request ke liye sab middleware chalege
app.get('/',(req,res)=>{
     console.log("------------------------------------------");
     console.log("Mai ROUTE HANDLER HU");
     console.log(req.body);//--> undefined print hua kyuki  parse nahi hua tha
     res.send("Hello ji")
})

//monting the route
app.use("/api",route)

//->/api/route
//->api/admin

app.listen(port,()=>{
    console.log(`App is working on port ${port}`);
})

*/


//writing an endpoint for uploading images
//third party middleware
//upload  a single image
app.post("/upload",upload.single("image"),(req,res,next)=>{
    console.log(req.file,req.body);
    res.send(req.file)
},(err,req,res,next)=>{
    res.status(400).send({err:err.message})
})

//application level middleware
const loggerMiddleware=(req,res,next)=>{
    // request ka method aur url log o jaaye ga with time and date
    console.log(`${new Date()} --- REQUEST [${req.method}] [${req.url}] `);
    next();
}

app.use(loggerMiddleware)

app.use(logger("dev"))
// combined , short , dev , tiny

app.use("/api/users",router)

//fake auth for route level middleware
const fakeAuth=(req,res,next)=>{
    const authStatus=true;
    if(authStatus){
        console.log("User auth status :",authStatus);
        // if auth is sucessful then only execute the request
        next()
    }else{
        // now here we are getting error in the form of a html page
        //we need to catch it and show it in the form of json object
        // for that use a error handler middleware
        res.status(401);
        res.message("User Is Unauthorised")
    }
}


//WE NEED TO INTERCEPT THIS ERROR AND SHOW IT IN RESPONSE JSON OBJECT AND GIVE IT TO THE USER
//ERROR HANDLING MIDDLEWARE
const errorHandler=(err,req,res,next)=>{
    // if we have a statuscode pass it or pass a 500 code
   const statuscode= res.statusCode?res.statusCode:500
   res.status(statuscode);
   //handle different kind of errors
   switch(statuscode){
    case 401:
        res.json({
            title:"Unauthorised access",
            message:err.message,
        });
    break;
    case 404:
        res.json({
            title:"NOT FOUND BAD REQUEST",
            message:err.message,
        });
    break;
    case 500:
        res.json({
            title:"Internal SERVER ERROR",
            message:err.message,
        });
    break;
   }
}



const getUsers = (req,res) => {
    res.json({
        message:" Get all Users .... "
    }) 
}



const createUser = (req,res) => {
    console.log("This is the data in the request body received from client ",req.body);
     res.json({
        message:" Create new User .... "
    }) 
}

//ROUTER LEVEL MIDDLEWARE
// on every route when some one sends a request first execute the middleware
// do the authentication if it is sucessful then ive res else give error
router.use(fakeAuth)
router.route("/").get(getUsers).post(createUser)

// if we dont define any route we needto throw the 404
app.all("*",(req,res)=>{
    //yaha error aaya abb apne app error handling middleware will handle it
    res.status(400);
    throw new Error("Route not found");
})

//USIING ERRORHANDLER AS A MIDDLEWARE which is used in the apllication level 
app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server started on port ${port} `);
})

// Multer is a node package used to upload files to the server

