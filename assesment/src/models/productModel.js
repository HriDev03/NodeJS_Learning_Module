// saari details related to concetion to db 
import pool from "../config/db.js";

// ALL THE QUERRIES WRITTEN

//getting all users
const getAllProductss=async()=>{    
    const result= await pool.query("Select * FROM products");
    return result.rows
};

app.use("/users")

app.get("/users")

//get product by id
const getProduct=async(id)=>{
    const result=await pool.query(
        "SELECT * FROM products WHERE id=$1",
        [id]
    );
    return result.rows[0];
};

//update product
const updateProduct=async(price,id)=>{
    const res=await pool.query(
        "Update products set price=$1 where id=$2 returning * ",
        [price,id]
    );
    return res.rows[0]
}


//deletig our product
// Deleting a user
const deleteProduct=async(id)=>{
    const res=await pool.query(
        " DELETE FROM  products WHERE id=$1 returning *",
        [id]
    );
    return res.rows[0];
}


module.exports={getAllProductss,getProduct,updateProduct,deleteProduct}