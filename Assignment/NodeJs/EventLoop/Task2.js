// Q2) Compare setImmediate() vs process.nextTick()
// process.nextTick() : will wait for currect tasks to complete and then when it is done will run before I/O ,timers and even before setImmediate()
// setImmediate() :  will wait for currect tasks to completeand then will run after I/O ops but before timer it will run

const fs = require('fs');
// call stack ke andar jaye ga immediately will be printed on console
console.log("Start");
//run after Immediate
setTimeout(()=>{
    console.log("setTimeout");
},0);
//will run after console but wont wait for IO
process.nextTick(()=>{
    console.log("process.nextTick");
});
//will run after nextTick
fs.readFile(__dirname+"/input.txt", () => {
    console.log("I/O Operation");
});
//will run after IO ops
setImmediate(() => {
    console.log("setImmediate");
});
// call stack ke andar jaye ga immediately will be printed on console
console.log("End");

//Output:
/*
start
end
process.nextTick
I/O operation
setImmediate
setTimeour
*/