const fs=require("fs");

const {Transform}=require("stream")

//read data --> transfrom data-> write data4
const readStream = fs.createReadStream(__dirname+"/input.txt","utf-8");

const writeStream = fs.createWriteStream(__dirname+"/transformOutput.txt");

//transform Data
const uppperCaseTransform=new Transform({
    // transform takes 3 parameters chunks, encoding and callback
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }

})

readStream.pipe(uppperCaseTransform).pipe(writeStream)


//  More Cases

// const fs = require('fs')
// const path = require('path')
// const zlib = require('zlib')
// const filepath = path.join(__dirname,'input.txt')
// const zipfilepath = path.join(__dirname,'input.zip')
// fs.createReadStream(filepath).pipe(zlib.createGzip().pipe(fs.createWriteStream(zipfilepath)))
 
// fs.createReadStream(filepath).pipe(zlib.createGzip()).pipe(fs.createWriteStream(zipfilepath))
 
// const fs=require('fs');
// const readStream=fs.createReadStream(__dirname+"/input.js","utf8");
// readStream.on("data",(chunks)=>{
//     console.log(chunks);
// })

// readStream.on("end",()=>{
//     console.log("reading ended");
// })
 

// readStream.on("error",()=>{
//     console.log("An error occured",err.message);
// })

// const writeStream=fs.createWriteStream(__dirname+"/output.js");

// writeStream.on("error",()=>{
//     console.log("reading ended");
// })


// // to connect our readable stream with writeable stream
// readStream.pipe(writeStream)

// writeStream.on("finish",()=>{
//     console.log("data has been written");
// })

// // agar file read karte wakt koi error aaya toh 
// readStream.on("error",(err)=>{
//     console.log("error : ",err.message);
// })

// //agar file write karte time koi error aaya toh
// writeStream.on("error",(err)=>{
//     console.log("error : ",err.message);
// })

// //making a zipped file
// const fs=require('fs')

// const zilb=require('zlib');
// const gzip=zilb.createGzip();

// const createReadStream=fs.createReadStream(__dirname+'/input.txt');

// const createwriteStream=fs.createwriteStream(__dirname+'/input.txt.gz');
// createReadStream.pipe(gzip).pipe(createwriteStream)


const fs=require("fs");
const {Transform}=require("stream")

const uppperCaseTransform=new Transform({
    transform(__dirname)
})