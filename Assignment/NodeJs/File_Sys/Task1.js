
// Q1) Read a file and log its content.

const fs = require('fs');

const readStream=fs.createReadStream(_dirname+"/input.txt");

readStream.on("data",(chunks)=>{console.log("received data in the from of chunk : "+chunks);});

