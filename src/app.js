import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express();

// yeh sab use hoga app banne ke baaad
app.use(cors({
    // kaha se allow karna hai
    origin:process.env.CORS_ORIGIN
}));


// express body parser ki kitni limit mai data laana hai
//jo normal data aa raha hai usse aise fetch karege 
app.use(express.json({limit:"16kb"}))

// jo data url se aa raha hai uspai kaise kaam karege
app.use(express.urlencoded({extended:true,limit:"16kb"}))

// Jo bhi files hai jaise pdf , images unhe public folder se access karo 
app.use(express.static("public"))

//cookie parser :server se jo mere user ke browser ki cookies hai usse set krr paau aur access krr paau
app.use(cookieParser())
export {app}


// hrr middleware mai db se baat karni hai toh wrapper ko util file mai daal do na