const express = require("express");
const studentRoutes = require("./src/student/routes"); // adjust path as needed

const app=express();
app.use(express.json()); 

app.use("/api/v1/students", studentRoutes);

app.listen(3000,()=>{
  console.log("App listening on port 3000");
});


/*  
    Some command for shell
    \l : to see all databases
    \c tablename : to connect to a database

*/