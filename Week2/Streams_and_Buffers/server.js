// /* 
//     What are Streams and Why is it important ?  

//     There is a Text file and is having some text content of 50mb , 
//     we need to make an express server in which if user comes to / route 
//     we need to give the  content of file.txt to the user in a response
    
//     we will read file using the fs module 



const zlib=require("zelib");
const express=require('express');
const fs=require("fs")

const app=express();
const Port=8080;

app.get("/",(req,res)=>{
    fs.readFile("./sample.txt",(err,data)=>{
        res.end(data);
    });
});



// aise normally there is a huge spike when we are using the file module functions
// pehle data read kiya then user ko send kiya
// ab takk data load ho raha thaa data ko pehle save karke rakhna pada

// we have a limited memory and this way is not memory efficient 

// TO SOLVE IT WE USE STREAMS
// jaise jaise data aate jaaye vaise hii usse bhejte jaao
// DONT READ BUT STREAM CHUNK BY CHUNK AND SEND data in our browser
// Like a data pipeline

// server memory wont spike up



app.get("/",(req,res)=>{
    //file se read karna hai stream by stream
    // ek stream banao
  const stream=fs.createReadStream('./sample.txt',"utf-8");
  // jab bhi ispe data aate jaayega
  //hamare paas iska chunk  aayea 
  stream.on(('data'),(chunk)=>res.write(chunk));
  //abb pura kaam khatam ho gaya
  // request response cycle ko pura band krr do
  stream.on('end',()=>res.end());
});



// jab bhi res.write() karte hai express transfer.encoding() chunked karta hai
// tumhe data chunks mai mile ga
// data is send in series of chunks

// eg2: we need to zip a file
// a) We can do it by reading the file and then making a zip file of t and then writing it

// pehle data read krr diya
// then data ko pipe krr diya : data ko atana ki kahaa jaana hai?
// Stream Read (Sample.txt)---> Zipper ---> fs Write Stream
// fs.createReadStream('./sample.txt').pipe(zlib.createGzip).pipe(fs.createWriteStream('./sample.zip')) 



app.listen(Port,()=>{
    console.log(`Server started at PORT ${Port}`);
})