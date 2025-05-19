 //Q1) creating promise that resolves after .sec
let promisee=new Promise((res,rej)=>{
    console.log("Inside Promise");
    setTimeout(()=>{
        res(200);
    },1000)
    promisee.then((res)=>{
        console.log("Promise resolved after 1s ",res)
    }).catch((err)=>console.log(err));
})
