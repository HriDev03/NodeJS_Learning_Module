const express=require("express");
const dotenv=require("dotenv");
const dbConnect = require("./src/db/db.js");
// server.js (FIX THIS)
const openRoutes = require("./src/routes/open.routes.js");
const protectedRoutes = require("./src/routes/protected.routes.js");


dotenv.config();

const app=express();

app.use(express.json());


app.use("/api/user", protectedRoutes);
app.use("/api/auth", openRoutes);     

const port = process.env.PORT || 7002;

dbConnect();

app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`);
})