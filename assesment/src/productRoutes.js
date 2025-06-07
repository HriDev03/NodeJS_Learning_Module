const express=require("express")
const router=express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} =require("./controllers/productController")
//saare products fetch
router.get("/",getProducts)

//fetching products by id
router.get("/:id",getProduct)

//new product 
router.post("/",createProduct)

//updating our product
router.put("/:id",updateProduct)

//product delete karnaa
router.delete("/:id",deleteProduct)




module.exports = router;