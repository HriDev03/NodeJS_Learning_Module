//Q2) Create a class that extends EventEmitter

const EventEmitter=require('events')

class MyEmitter extends EventEmitter {
    constructor(){
        // will get all the properties and built in functionality of our EventEmitter
        super(); 
    }
}

const event=new MyEmitter();

event.on("greet",(user)=>{
    setTimeout(()=>{
        console.log(`Hello ${user}`);
    },1000)
})

event.emit("greet","HRI")
