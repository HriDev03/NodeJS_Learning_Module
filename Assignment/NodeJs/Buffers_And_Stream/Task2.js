// Q2)  Pipe a file stream to another file
const fs = require('fs');

const readStream=fs.createReadStream(_dirname+"/input.txt");

const writeStream=fs.createWriteStream(_dirname+"/output.txt")

//reading start
readStream.on("data",(chunks)=>{console.log("data aaya  "+chunks);});

//reading ho gaya khatam
readStream.on("end",()=>{console.log("reading done");})

//writing khatam ho gaya
writeStream.on('finish', ()=>{console.log('file coping');});

// jo data input file se aaya voh abb  output file pe chae gaya
readStream.pipe(writeStream)

