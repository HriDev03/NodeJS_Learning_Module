const express = require("express");
const productRoutes =require("./src/productRoutes")
const errorHandler =require("./src/middlewares/errorHandler")
const app=express();
app.use(express.json()); 

app.use("/products", productRoutes);
app.use(errorHandler)
app.listen(3000,()=>{
  console.log("App listening on port 3000");
});
