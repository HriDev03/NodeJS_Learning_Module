const todos = require("../data/dao/todos");

async function getAllTodos(req, res) {
    try{
        //all todo ko fetch krr diya
        const all=await todos.all();
        return res.json(all);
    }catch(err){
        return res.status(500).json({error:"Failed to fetch todos"});
    }
}


async function getTodo(req,res){
    try{
        //id fetch ki from request
        const todo = await todos.get(req.params.id);
        if(!todo){
            return res.status(404).json({ error: "Todo not found" });
        }
        return res.json(todo);
    }
    catch(err){
        return res.status(500).json({ error:"Failed to fetch todo"});
    }
}

async function postTodo(req, res) {
    try{
        const{title,order}=req.body;
        if(!title){
            return res.status(400).json({err:"Title is required"});
        }
        const create_new_todo=await todos.create({title,order});
        return res.status(201).json(create_new_todo);
    }
    catch(err){
        return res.status(500).json({ error:"Failed to create todo",details:err.message});
    }
}

module.exports = {
    getAllTodos,
    getTodo,
    postTodo
};
