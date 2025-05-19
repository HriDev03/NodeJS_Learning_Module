const fs=require("fs")
//readStream=fs.createReadStream(path,encoding)

//createread stream implements the readable stream
const readStream=fs.createReadStream(__dirname+"/input.txt","utf-8");  

// some methods of readstream

/*
    data,()=>{ callback
    }
*/

//will help us to read data

//data , end, error

readStream.on("data",(chunks)=>{
    console.log("received data in the from of chunk : "+chunks);
}) ;

// after the data is read
//when the reading has ended
readStream.on("end",()=>{
    console.log("finished reading the file");
})

//error while reading the file
readStream.on("error",(err)=>{
    console.log("An error occured",err.message);
})

