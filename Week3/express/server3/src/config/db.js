//DB CONNECTION KI FILE HAI 

import pkg from 'pg';
import dotenv from 'dotenv';


//.env waali saari values ko ek process object mai laa aata hai
dotenv.config(); 

const { Pool } = pkg;

// check karo ki saare variable aa gye ki nahii
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_PORT:', process.env.DB_PORT);

//creating a pool of connection that will be used everytime we try to connect to db
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pool.on("connect", () => {
  console.log('Connection pool established with DB');
});

pool.on('error', (err) => {
  console.error('Unexpected DB error', err);
});

export default pool;
