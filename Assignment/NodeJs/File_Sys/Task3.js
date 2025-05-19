//  Q3) Recursively list files in a directory.
//recursively list files in a directory
 
const { log } = require('console');
const fs = require('fs');
const path = require('path');
 
function listFilesRecursively(dir) {
                    //agar file type ki hai  , callback
    fs.readdir(dir, { withFileTypes: true }, (err, entries) => {
        if(err){
            console.error('Error reading directory:', err);
            return;
        }
        entries.forEach((ele)=>{
            //agar directory hai toh recurssion call hoga
            if(ele.isDirectory()){
                listFilesRecursively(path.join(dir,ele.name));
            }
            //agar file hai toh name clg
            //agar file hai and .txt extension ki hai toh clg karo
            else if(ele.isFile()&&ele.name.endsWith(".txt")){
                console.log(ele.name);
            }
        })
    });
}
// Usage
listFilesRecursively("C:\Users\hridyesh.sharma\OneDrive - InnovaSolutions\Work\Assignment");