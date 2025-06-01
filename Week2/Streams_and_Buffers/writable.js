const fs=require("fs");

// iss file se read karo and store in the form of text
const readStream=fs.createReadStream(__dirname+"/input.txt","utf-8");

// in writeable stream we only have to pass the path of our output file
// jo bhi data humm read karege usse iss path pe copy krr do
const writeStream=fs.createWriteStream(__dirname+"/output.txt");


// to connect our readable stream with writeable stream
readStream.pipe(writeStream)

writeStream.on("finish",()=>{
    console.log("data has been written");
})

// agar file read karte wakt koi error aaya toh 
readStream.on("error",(err)=>{
    console.log("error : ",err.message);
})

//agar file write karte time koi error aaya toh
writeStream.on("error",(err)=>{
    console.log("error : ",err.message);
})


// readStream.on("data",(chunks)=>{
//     console.log("received data in the from of chunk : "+chunks);
// })

// readStream.on("end",()=>{
//     console.log("data read sucessfully");
// })
readStream.pipe(writeStream)