// Event Emitters
// Q1) Emit a greet event

const EventEmitter= require('events');
const event=new EventEmitter();
event.on("greet",(user)=>{
    setTimeout(()=>{
        console.log(`Hello ${user}`);
    },1000)
})
event.emit("greet","HRI")
