// Q3) script that generates a random number 

function randNum(){
    let num=Math.random()*10; // 0 to 10
    console.log(`Your random number is ${num}`);
}

setTimeout(()=>{
    randNum();
},1000);
    