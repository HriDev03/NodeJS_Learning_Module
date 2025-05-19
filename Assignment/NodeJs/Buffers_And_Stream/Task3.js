//  Q3)Compress a file using  zlib
const fs=require("fs");
const {Transform}=require("stream")
//read data --> transfrom data-> write data
const readStream=fs.createReadStream(__dirname+"/input.txt","utf-8");
const writeStream=fs.createWriteStream(__dirname+"/transformOutput.txt");
//transform Data
const uppperCaseTransform=new Transform({
    // transform takes 3 parameters chunks, encoding and callback
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})
readStream.pipe(uppperCaseTransform).pipe(writeStream)

