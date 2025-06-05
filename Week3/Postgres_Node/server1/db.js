//here db cibbection will be there
const Pool=require("pg").Pool;

//creating pool
const pool=new Pool({
    user:"Hri03",
    host:"localhost",
    database:"students",
    password:"14112607Hri@",
    port:5432,
});


module.exports= pool;


