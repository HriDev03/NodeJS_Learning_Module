import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';

import userRoutes from "./routes/userRoutes.js"

dotenv.config();


const app = express();
const port = process.env.PORT || 5001;

//NORMAL MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api",userRoutes)

// ERROR HANDLER MIDDLERWARES
app.use(errorHandler)

// POSTGRES CONNECTION TEST KRR RAHE HAI
app.get('/', async (req, res) => {
  try {
    //GIVE ME THE NAME OF THE DB JAHA SE CONNECT KIYE HO
    const result = await pool.query('SELECT current_database()');
    res.send(`The database name is: ${result.rows[0].current_database}`);
    res.status(200)
  } catch (err) {
    console.error('Error connecting to DB:', err.message);
    res.status(500).send('DB connection failed');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
