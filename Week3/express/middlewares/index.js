const express=require('express')
const app=express()
const port=3000
const route=require("./routes/route")


//inbuilt middle ware
// jo request ki body mai data aata hai usse parse karne ke liye we use res.json()
//HOW loading middleware into the app : app.use()
app.use(express.json())
// agar json bheju toh json mai convert karo, data changing , fetching key value pairs


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

//using them
app.use(loggingMiddleware);
app.use(validationMiddleware);
app.use(authMiddleware);




// write middlewares before all these
//hrrr request ke liye sab middleware chalege
app.get('/',(req,res)=>{
     console.log("------------------------------------------");
     console.log("Mai ROUTE HANDLER HUA");
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


