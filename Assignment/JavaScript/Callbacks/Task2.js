//Q2) Reading file using fs.readFile()
const fs=require("fs")
fs.readFile(__dirname+"/input.txt","utf-8",(err,res)=>{
    // humm error first callback karege
    if(err){
        console.log("unexpected error came ",err);
    }
    else{
        console.log("------------------------------");
        console.log("Read file Async");
        console.log(res);
    }
})