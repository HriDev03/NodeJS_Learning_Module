//OUR ENTRY FILE FOR NODE JS APP

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import pool from './config/db.js';
import errorHandler from './middlewares/errorHanler.js';

import userRoutes from "./routes/userRoutes.js"
import createUserTable from './data/createUserTable.js';

dotenv.config();


const app = express();
const port = process.env.PORT || 5001;

//NORMAL MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api",userRoutes)

// ERROR HANDLER MIDDLERWARES
// Iski help se error handling hogi
app.use(errorHandler)

//creating user table before starting server
createUserTable();


// POSTGRES CONNECTION TEST KRR RAHE HAI
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT current_database()');
    res.status(200).send(`The database name is: ${result.rows[0].current_database}`);
  } catch (err) {
    console.error('Error connecting to DB:', err.message);
    res.status(500).send('DB connection failed');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});