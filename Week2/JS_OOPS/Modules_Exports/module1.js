const hello=()=>{
    console.log("Hell Hrii");
}
const ahello=(name)=>{
    console.log(`Hell ${name}`);
}

//exporting our function so that it can be used somewhere else
// module.exports=hello;
//wxporting multipke methods
module.exports={hello,ahello};