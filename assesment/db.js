const Pool=require("pg").Pool;

const pool=new Pool({
    user:"Hri03",
    host:"localhost",
    database:"assessment",
    password:"14112607Hri@",
    port:5432,
});


module.exports= pool;

