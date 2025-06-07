// saari details related to concetion to db 
import pool from "../config/db.js";

// ALL THE QUERRIES WRITTEN

//getting all users
export const getAllUsersService=async()=>{    
    const result= await pool.query(
        "Select * FROM users"
    );
    return result.rows
};
//we will create tabe using our node js application

//getting user by id
export const getUserByIdService=async(id)=>{
    // dont put value directly here as it could lead to sql injection
    // we will place $1 as a placeholder jaha prr we can place id
    const result=await pool.query(
        "SELECT * FROM users WHERE id=$1",
        [id]
    );
    return result.rows[0];// i will take the first element of the rows
};

//creating a new user
export const createUserService=async(name,email)=>{
    // we want to return all the affected rows here
    const result=await pool.query(
        "INSERT INTO users (name,email) VALUES($1,$2) returning * ",
        [name,email]
    );
    // after inserting the user we need to return the effected rows, since we are returning everthing use *
    return result.rows[0];
}

// Updating existing user ki name and email
export const updateUserService=async(name,email,id)=>{
    // update name and email where id match karti hai , and return all rows
    const res=await pool.query(
        "Update users set name=$1 , email=$2 where id=$3 returning * ",
        [name,email,id]
    );
    return res.rows[0]
}

// Deleting a user
export const deleteUserService=async(id)=>{
    const res=await pool.query(
        " DELETE FROM  users WHERE id=$1 returning *",
        [id]
    );
    return res.rows[0];
}

