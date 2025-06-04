// yaha sql querry run hogi aur table run hogaa
import pool from "../config/db.js";

export default async function createUserTable() {
    const querryText=
    `
        CREATE TABLE IF NOT EXISTS users
        (
            id serial PRIMARY KEY,
            name varchar(100) not null,
            email VARCHAR(100) UNIQUE NOT NULL,
            created_at TIMESTAMP DEFAULT Now()
        )
    `
    try{
        pool.query(querryText);
        console.log("User table created if not exists");
    }catch(err){
        console.log("Error Creating User Table:",err);
    }
}