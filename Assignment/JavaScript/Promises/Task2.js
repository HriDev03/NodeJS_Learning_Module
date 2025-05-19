//Q2)converting a Callback to a promise
//function to increase by 1

function incNumber(num,increase){
    setTimeout(()=>{
        console.log(num);
        // it will increase by 1
        if(increase){
            increase(num+1);
    }},1000)
}
            
incNumber(1,(num)=>{                                //  1
    incNumber(num,(num1)=>{                         //  2
        incNumber(num1,(num2)=>{                    //  3        Pyramid of doom---->Call back hell
            incNumber(num2);                        //  4
        }) 
    });
})
            
           
//-------------------------------------        USING PROISES   ----------------------------------

function incNumber(num){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(num);
            res(num+1);
        },1000)

    })
}

incNumber(1)
    .then(incNumber)
    .then(incNumber)
    .catch((err)=>{
        console.log("some error occurred",err)
    });


// clean Async Await code

function importantAction(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Welcome to function 1 "+data);
        },2000)
    })
}

function importantAction2(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Welcome to function 2 "+data);
        },2000)
    })
}

function importantAction3(data){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Welcome to function 3 "+data);
        },2000)
    })
}

const res=async()=>{
    try{
      let res1=await importantAction("Hri")
      console.log(res1);
      let res2=await importantAction2("Hridyesh")
      console.log(res2);
      let res3=await importantAction3("Hrii")
      console.log(res3);
    }
    catch(err){
      console.log(err);
    }
}
res()
