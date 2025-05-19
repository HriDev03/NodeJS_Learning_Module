//  Starvation : A condition where other tasks in Callback queue keep on waiting as other tasks keep on coming

// long running task
function AlongTask() {
    // this is block event loop for 8s
    const end = Date.now() + 8000;
    while(Date.now()<end){
        //Blocking the event loop
    } 
    console.log("Starvation task khatam hua");
}

//will be starved and will only be executed after 8s
setTimeout(()=>{
  console.log("This timeout is STARVED and runs late.");
}, 0);

console.log("Starting long task...");
AlongTask(); // This blocks the event loop
console.log("setTimeout completed after being starved");
