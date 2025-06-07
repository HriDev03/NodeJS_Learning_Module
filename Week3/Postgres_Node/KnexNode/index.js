require('dotenv').config();
// a todo app
const express=require("express");

// mera db instance hai
const db=require("./data/db.js")

const app = express();

const routes=require('./routes/serverRoutes.js')

// middlewares ki help se fetching data from request body
app.use(express.json());

app.get("/",routes.getAllTodos)
app.get("/:id",routes.getAllTodos)
app.post("/", routes.postTodo)


// app.get("/",(req,res)=>{
//     res.json({'message':'Hello World from default route'})
// })

// app.get("/todo", async(req,res)=>{
//     try{
//         // saari details from todos table
//         const todos=await db("todo");
//         res.json({todos});
//     }catch(error){
//         console.error("Error aa gaya hai :", error);
//         res.status(500).json({error:"failed fetching todos data"});
//     }
// })

// //inserting a task in pur todo
// app.post("/todo", async (req, res) => {
//   try {
//     console.log("Request body:", req.body);

//     const { task } = req.body;

//     if (!task || typeof task!=="string"||task.trim()==="") {
//       return res.status(400).json({ error: "Task must be a non-empty string" });
//     }

//     const insertedIds = await db("todo")
//       .insert({ task })
//       .returning("id");

//     console.log("Inserted IDs:", insertedIds);

//     if (insertedIds && insertedIds.length > 0) {
//       // insertedIds could be [{id: 1}] or just [1], depending on knex version/config
//       const id = insertedIds[0].id || insertedIds[0];
//       return res.status(201).json({ message: "Created Successfully", id });
//     } else {
//       return res.status(500).json({ error: "Failed to create todo" });
//     }

//   } catch (error) {
//     console.error("Insert error:", error);
//     res.status(500).json({ error: error.message || "Something went wrong" });
//   }
// });


const port = process.env.PORT || 3003;

app.listen(port|| 3003,()=>{
    console.log(`Application started on port ${port}`);
})


