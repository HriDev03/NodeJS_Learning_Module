
import {getAllProductss,getProduct,updateProduct,deleteProduct} from "../models/productModel"
//getting all products
const getProducts = async(req,res,next)=>{
    try{
        const getProducts=getAllProductss();
        res.status(200).json({
            message:"getting all products",
            getProducts
        })
    }catch(err){
        next(err)
    }
}

//getting product by id
const getProduct = async(req,res,next)=>{
    try{
        const getProduct=getProduct(req.params.id);
        if(!id){
            console.log("give prodcut id");
        }
        res.status(200).json({
            message:"getting your product",
            getProduct
        })
    }catch(err){
        next(err)
    }
}


//creating a new product
const createProduct = async (req,res,next) => {
    const {name,price,stock} = req.body;
    try{
        const newProduct = await createNewProduct(name,price,stock);
        if(price<0){
            res.status(400).json({
                message:"price cant be negative"
            })
        }
        res.status(200).json({
            message:"new product created",
            product:newProduct
        })
    }catch(err){
        // passing errors to the error handling middlewares
        next(err)
    }
}


//updating product
const updateProduct=async(req,res,next)=>{
    const {price}=req.body;
    try{
        const updateProductt=await updateProduct(req.product.id,price)
        res.status(200).json({
            message:"product updated",
            updateProductt
        })
    }catch(err){
        next(err);
    }
}
//delete product
const deleteProduct = async(req,res,next)=>{
    try{
        const deletedproduct=await deleteProduct(req.params.id)
        res.status(200).json({
            message:"product deleted sucessfully"
        })
    }
    catch(err){
        next(err);
    }
}


module.exports={getProducts,getProduct,createProduct,deleteProduct,updateProduct}