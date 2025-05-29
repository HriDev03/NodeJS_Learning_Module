// saari details related to concetion to db 
import pool from "../config/db";

export const getAllUsersService=async()=>{
    const result= await pool.query("Select * from users");
    return result.rows
};

export const getUserByIdService=async(id)=>{
    // dont put value directly here as it could lead to sql injection
    const result=await pool.query("Select * from users where id=$1",[id]);
    return result.rows[0];
};

export const createUserService=async(name,email)=>{
    // we want to return all the affected rows here
    const result=await pool.query("insert into users (name,email) values($1,$2) returning * ",[name,email]);
}

export const updateUserService=async()=>{

}
//31:14

export const deleteUserService=async()=>{

}
