// To do operations in file 

// create, read

const fs=require("fs");


// HOW TO WRITE DATA IN A FILE 


// Sync : This is a Syncronous Call
// and if we change it'll overwrite it

/* fs.writeFileSync('./test.txt',"Hey there this is a test ") */


// Async call to write data in a file

//.writeFile('name',"text",callback)

/*
    fs.writeFile('./testAsync.txt',"test 2 Async",(err)=>{
        })
    console.log("test")

*/

// -----------------------------------------------------------------

// HOW TO READ DATA IN A FILE

// read a file syncronously

// -----------> If we use it syncronously we can store the result in a variable
// what is the encoding of our file : for simple string utf-8

/*
    let res=fs.readFileSync("./data.txt","utf-8");
    console.log("------------------------------");
    console.log("Read file Sync");
    console.log(res);
*/


// -----------------------------------------------------------------------------------------
// Async expects a callback that expects er and data , it will not return anything 
// give me a callback that will give me 2 things 1)Err 2)Data i just read



    fs.readFile("./data.txt","utf-8",(err,res)=>{
        if(err){
            console.log(err);
        }else{
            console.log("------------------------------");
            console.log("Read file Async");
            console.log(res);
        }
    })

 


// Async Ops Expect a callBack  ///////////////////////////


// HOW TO APPEND DATA IN A FILE WITHOUT RE-WRITING IT
// Always want to have strings as an Argument

fs.appendFileSync("./test.txt",`${Date.now().toLocaleString()}Ram ram`);

/* 
    Whats its use ? : when we make our web server , he will keep te logs of all the users 
    who made the request with IP Address and time : Just like server logs 
*/

// TO COPY A FILE DATA TO ANOTHER FILE 
fs.cpSync("./data.txt","./copy.txt")

// TO DELETE FILE 
// fs.unlinkSync("./test.txt");

// to check the stats of a file
console.log(fs.statSync("./copy.txt"));

// to make a new folder

fs.mkdirSync("My_Newfolder");

// cant do this in Js , It is present only in Node Js . 
