import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();  // ensure env vars are loaded here or only in main file and import after

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pool.on('connect', () => {
  console.log('Connection pool established with DB');
});

pool.on('error', (err) => {
  console.error('Unexpected DB error', err);
});

export default pool;
