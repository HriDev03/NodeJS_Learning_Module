// Q2) Append text to an existing file.

const fs = require('fs');

setInterval(()=>{
    const logLine = `${new Date().toLocaleString()} Hello\n`;
    fs.appendFile('./test.txt',logLine,(err)=>{
        if(err){
           console.error('Error appending to file:', err);
        }else{
            console.log('Appended:',logLine);
        }
    });
},1000); 
//  Will be appended after every second
