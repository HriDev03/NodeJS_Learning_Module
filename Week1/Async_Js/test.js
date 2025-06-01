// let promise=new Promise((res,rej)=>{
//     console.log("Mera promise hai ");
//     res("OK sucess")
// })

// let promise1=new Promise((res,rej)=>{
//     console.log("promise to be failed");
//     //bad requet
//     rej(400)
// })


// promise.then(()=>{
//     console.log("Promise fu");
// })


// function getPromise(){
//     return new Promise((res,rej)=>{

//     })
// }

// const getPromise=()=>{
//     return new Promise((res,rej)=>{

//     })
// }


// let myPromise=getPromise()

// myPromise.then((res)=>{

// }).then(()=>{

// }).catch((err)=>{

// })




function asyncFunc() {
  return new Promise((res)=>{
    setTimeout(()=>
	res("Data from asyncFunc"), 1000);
  });
}

function asyncFunc2() {
  return new Promise((res)=>{
    setTimeout(()=>
	res("Data from asyncFunc2"), 1500);
  });
}

function asyncFuncFail() {
  return new Promise((res, rej)=>{
    setTimeout(()=>
	rej("Failed in asyncFuncFail"), 800);
  });
}



let p1=asyncFunc();
let p2=asyncFunc2();
let p3=asyncFuncFail();

// Promise.all([p1,p2,p3])
// .then(([res1,res2,res3])=>{
//     console.log("output of all promises");
//     console.log(res1);
//     console.log(res2);
//     console.log(res3);
// }).catch((err)=>{
//     console.log(err);
// })


// race : data from first settled promise
// any : data from first fulfilled promise

Promise.allSettled([p1, p2, p3])
.then(res => {
    console.log("First promise fulfilled with:", res);
}).catch(err => {
    console.log("All promises rejected:", err);
});



function makeApiCall(cb){
    setTimeout(()=>{
        console.log("THIS IS ASYNC TASK EXECTION");
    },0)
}

makeApiCall(()=>{
    makeApiCall(()=>{
        makeApiCall(()=>{
            asyncTask(()=>{
                asyncTask(()=>{

                })
            })
        })
    })
})



function boil(cb){
    setTimeout(()=>{
        console.log("Boiling water ...");
        cb();
    },1000)
}

function Tea(cb){
    setTimeout(()=>{
        console.log("Adding tea leaves");
        cb()
    },1000)
}
function milk(cb){
    setTimeout(()=>{
        console.log("Adding milk");
        cb()
    },1000)
}

boil(()=>{
    Tea(()=>{
        milk(()=>{
            console.log("Tea made");
        })
    })
})




const EventEmitter=require('events');
const MyEventEmitter=new EventEmitter();

MyEventEmitter.on("",()=>{

})

.once

.off

.prependListener

.preperdOnce



const EventEmitter=require("events");
const { join } = require('path');
class myEmitter extends EventEmitter{

}

//predefined function
/* function ListenForData(data){
     console.log(`predefined function ${data}`);
   
}*/
var emitter=new myEmitter();

//adding event listeners
// name of event, callback Func
// emitter
//     .on("message",()=>{
//         console.log("A message is emitted")
//     })
//     .once("message",()=>{
//         console.log("This is not the right message");
//     })
//     .on("event",()=>{
//         console.log("An event just occured");
//     })
//     .addListener("message",()=>{
//        console.log( "added with add event listener");
//     }) // same as on function 

    // .on("data",ListenForData);

    // .on("data",function(a,b){
    //     console.log(`Anonymous function ${a} , ${b}`);
    // })
 

emitter.once("oncee",()=>{
    console.log("will work only for the first time")
})

// emitter.setMaxListeners(1);
//only one event listener per a particular event

// emitter.prependListener("prepend",()=>{
//     console.log("prepended to the top !");
// })

function prepended(){
    console.log("prepended to the top  !");
}

emitter.on("prepend",prepended);

// emitter.prependOnceListener("prepend",)

// will stop a event listener to listen for a particular event
/* When we want to remove a listener we need to give its name IT IS SAME AS of  */

// emitter.emit("data","This is my message That I passed","Ram ram")
setInterval(()=>{
    emitter.emit("oncee")
    emitter.emit("prepend");
},1000)



setTimeout(()=>{
    emitter.removeListener("prepend",prepended);
},4000)

listeners(eventName)==> array of listeners of event
listenerCount(eventName)==> number of listeners for an event
eventNames()=>array of eventNames

myEmitter.on('log', () => console.log('Second')); 4th
myEmitter.on('log', () => console.log('Second')); 3rd
myEmitter.prependListener('log', () => console.log('First')); 2nd
myEmitter.prependListener('log', () => console.log('Thrid')); 1st


select  from customers as c
inner join
departments as d 
on c.cust_id=d.cist_id