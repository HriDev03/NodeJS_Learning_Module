// saari details related to concetion to db 
import pool from "../config/db";

//getting all users
export const getAllUsersService=async()=>{
    const result= await pool.query("Select * from users");
    return result.rows
};

//getting user by id
export const getUserByIdService=async(id)=>{
    // dont put value directly here as it could lead to sql injection
    const result=await pool.query("Select * from users where id=$1",[id]);
    return result.rows[0];
};

//creating a new user
export const createUserService=async(name,email)=>{
    // we want to return all the affected rows here
    const result=await pool.query("insert into users (name,email) values($1,$2) returning * ",[name,email]);
    return result.rows[0];
}

//updating existing user ki name and emial
export const updateUserService=async(name,email,id)=>{
    const res=await pool.query("Update users set name=$1 , email=$2 where id=$3 returning * ",[name,email,id]);
    return res.rows[0]
}

//deleting a user
export const deleteUserService=async(id)=>{
    const res=await pool.query(" delete from users where id=$1 returning *",[id]);
    return res.rows[0];
}
