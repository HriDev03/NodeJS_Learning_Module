// Async Js

// 1) Sync : Line By Line Exeution , each instruction waits for the previous one to complete

// 2) ASYNC : When we are doing some task that will take much time we can use Async features of js so that we dont have to wait much , or we didn't have to block our code . 


// eg : setTimeOut() , setInterval() ,  promises , 


// a) Callbacks : An argument to another function , aisa function jo kisi aur function ko as an argument pass karte hai 

//----------------------------------------------------------------------------------------
// using callback in Sync way
function sum(a,b){
	a+b;
}

function calculator(a, b, callBack){
	callback(a,b);
}

calculator(1,2,sum);

//-------------------------------------------------------------------------------------------
// using callbacks in async way
const hello=()=>{
	console.log("hello");
}

// set Time out will also take callback 
setTimeout(hello,3000);

//-------------------------------------------------------------------------------------------

// problem : CallBack Hell 

// When we have nested callbacks it's really bad for the read_ablility

// Nested callbacks is a problem , Pyramid of Doom
// nested callbacks below each other forming a pyramid structure is called CALLBACK HELL ( Pyramid of Doom)

// ------------------------------------------------------------------------------------------

//jab DataBase se data fetch krr rahe hai
// data 2s mai fetch hoga

function getData(dataId){
	setTimeout(()=>{
   		console.log("data : ",dataId);
 	},2000)
}

getData(1);

//-------------------------------------------------------------------------------------------

// Pehle data1 --> firr data2 --> firr data3

// during login  ---> Pehle username check ----------> firr password check

/////////////////// using callBacks ////////////////////////////////////////////////

function getData(dataId, getNextData){
	setTimeout(()=>{
   		console.log("data : ",dataId);
		if(getNextData){
			getNextData();
		}
 	},2000)
}


getData(1,()=>{

	///////////////// THIS IS A CALLBACK FUNCTION //////////////////////////////
	console.log("getting data 2");

	getData(2,()=>{
		console.log("getting data 3");

		getData(3,()=>{
			console.log("getting data 3");

			getData(4);

		});
	}); 
});		

//Pyramid of doom
//--------------------------------------------------------------------------------------
// Promises : WAADA , VISHWAAS --------------> Callback hell waali problem ko solve karne ke liye promises aaye
// Promise of an eventual completion or rejection of a task. Jo bhi baad mai iska result aaye ga usske saath baad mai kaam karege
// it is an object in JS , a solution to call back hell

// let promise=new Promise((res,rej)=>{

// })

// Real Life Example : Like we ordered something from Amazon , abb humme amazon pai vishvaas hai ki eventually it will be done

// yeh order humm pai deliver hoga
// either it will resolve or it will reject

//-------------------------------------------------------------------------------------------
// States of Promises
// Pending , fulfilled , resolved , reject

let promise=new Promise((res,rej)=>{
	console.log("Ï am a promise");
	res("OK sucess")
})

let promise=new Promise((res,rej)=>{
	console.log("Ï am a promise");
	rej("Some error occured")
})


promise.then(()=>{
	// if promise has sucessfully executed hwat to do
	console.log("Promise fullfilled")
}).catch((e)=>console.log("rejected"))



// if we run res it means promise is fulfilled and work is complete
// if we rej it means promise is not fulfilled and work is not complete

// fetching data from an api , that API will return a promise

function getData(dataId,getNextData){
	// i promise that you will get result of this process after 5seconds
	return new Promise((res,rej)=>{
		setTimeout(()=>{
   			console.log("data : ",dataId);
			res("sucess, 200")
			if(getNextData){
				getNextData();
			}
 		},2000)

	});
}

// how we can use the promises

// 1) if promise is resolved =====> .then()
// 2) if promise is rejected=====> .catch()


const getPromise=()=>{
	return new Promise((res,rej)=>{
		console.log("i am a promise");
		res(200);
	});
}

let promise=getPromise();

// then ke andar apne aap ek parameter hota hai by the name of result
// catch ke adar ek parameter hota hai by the name of catch
promise.then((res)=>{
	console.log("Sucess",res)
})

promise.catch((err)=>{
	console.log(err)
});

//-------------------------------------------------------------------------------------------

// PROMISE CHAINING

// chaining of promises for multiple steps one after another   

function asyncFunc(){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			console.log("some data 1");
			res("sucess");
		},4000)
	})
}

function asyncFunc2(){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			console.log("some data 2");
			res("sucess");
		},4000)
	})
}

// WE NEED TO FIRST FETCH DATA 1 THEN DATA 2
//PEHLE USERNAME THEN PASSWORD
console.log("Fetching data 1 ....");

// Way 1 : 
let p1=asyncFunc();
p1.then((res)=>{
	console.log(res)
	console.log("Fetching data 2 ....");

	let p2=asyncFunc2();

	p2.then((res)=>{
		console.log(res)
	});
});


//Another Way : 
// PROMISE CHAINING : Ek then ke saath dusra then chain krr diya
asyncFunc.then((res)=>{
	console.log(res)
	console.log("Fetching data 2 ....");
	asyncFunc2().then((res)=>{
		console.log(res)
	});
});


function getData(dataId){
	// i promise that you will get result of this process after 5seconds
	return new Promise((res,rej)=>{
		setTimeout(()=>{
   			console.log("data : ",dataId);
			res("sucess, 200")
		},2000)

	});
}


// Pehle data 1 aaye gaa agar resolve hua tabhi data 2 aaye ga 
getData(1).then((res)=>{
	return getData(2)
}).then(()=>{
	 return getData(3);
}).then(()=>{
	console.log(res)
})

// -----------------------------------------------------------------------------------------
// PROMISE API 

// Eg : 

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
	rej("Failed in asyncFuncFail"), 1200);
  });
}


// 1) .all() : Used to call and get results from multiple Promises simultaneously
// 	    We will give an Iterable of promises, and we'll get the results in the form 	    of an array
	
	let p1=asyncFunc();
	let p2=asyncFunc2();
	Promise.all([p1,p2])
	.then(([res1,res2])=>{
		console.log("results of Promise.all");
		console.log(res1);
		console.log(res2);
	})
	.catch((err)=>{"console.log",err});

	// in case if one promise fails we wont get the resultant array

//2) . any() : Will return us the result from the  first fulfilled promise , if all rejected then error
	
	let p1=asyncFunction();
	let p3=asyncFuncFail();
	let p2=asyncFunction2();

	// will show result from promise 1 only ,  as it is the fist resolved execution
	Promise.any([p3,p1,p2])
	.then((res)=>{
		console.log(res) 
	})
	.catch((err)=>{
		console.log(err);
	})


//3) .race() : will show the result of first settled promise resolved or rejected

	let p1=asyncFunction();
	let p3=asyncFuncFail();
	let p2=asyncFunction2();

	Promise.race([p3,p1,p2])
	.then((res)=>{
		console.log(res) 
	})
	.catch((err)=>{
		console.log(err);
	})

	// will show result from promise 3 only ,  as it is the fist settled promise


//4) .allSettled() : will want for every promise to complete and then will give us the resultant array including all the answers of both resolved and rejected

	let p1 = asyncFunc();
	let p2 = asyncFunc2();
	let p3 = asyncFuncFail();

	Promise.allSettled([p1, p2,p3])
  	.then(([res1, res2]) => {
    	console.log("Results of Promise.allSettled:");
    	console.log(res1);
    	console.log(res2);
  	})
  	.catch((err)=>{
		console.log(err);
	})

	// will show result of all promises when they wll get settled

// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// ASYNC AWAIT ............ ES6

// #! Async Await always returns a PROMISE

// Async : To make our function Asyncronous

// Await : to Wait , it pauses the execution of async function until the promise is fullfilled

// it's job is to make async programming much easier

// we can make any function an Async function by just simply returning a promise

// await wait karega promise ka jab tak sabh kuch settle nahi ho jaaye ga
// can be used only with an Async function

async function hello(){
	console.log("hello")
}

// Example 1
function api(loc){
	return new Promise((res,rej)=>{
		setTimeout(()=>{
			console.log(`got weather data for ${loc}`);
			res(200);
		},2000)
		
	});
}


async function getWeatherData(){
	await api("Delhi");// 1st call
	await api("Mumbai");//2nd call
	
}

//Example 2 
function getData(dataId){
	// i promise that you will get result of this process after 5seconds
	return new Promise((res,rej)=>{
		setTimeout(()=>{
   			console.log("data : ",dataId);
			res("sucess, 200")
		},2000)

	});
}

async function getAllData(){
	await getData(1);
	// jab takk pehla resolve nahi hota tabh takk runkk jaao
	await getData(2);
	await getData(3);
	await getData(4);
}

getAllData();

// NOW WHEN WE USE ASYNC AWAIT WE HAVE TO USE THEM INSIDE A FUNCTION , WE CAN AVOID IT BY USING

// VERY IMPORTANT STUFF
// --------------------------------------------------------------------------------------
// IIFE : Immediately Invoked Function Expression
// have to be used only once

(async function()=>{
	await getData(1);
	// jab takk pehla resolve nahi hota tabh takk runkk jaao
	await getData(2);
	await getData(3);
	await getData(4);
})();
//-----------------------------------------------------------------------------------------

//Async-Await >>>>> Promises


// some more practice
/*  Js is sync single threaded lanuage     */

//Sync Blocking Code
/*
console.log("Start Ops...")
function sleep(milliSecs){
    console.log("Op started");
    let start=new Date().getTime();
    while(new Date.getTime()<start+milliSecs){
        console.log("In Progress");
    }
}
sleep(1000);
console.log("Do something else");
*/


// NON BLOCKING CODE (Async) 
/*
console.log("Start Ops...")
function sleep(milliSecs){
    console.log("Op started");
    setTimeout(()=>{
        console.log("Op done");
    },milliSecs)
}
sleep(1000);
console.log("Do something else");
*/

//Call Back Function
// a function passed as an argument and it'll be called later

//callback are sync in nature
// we need to make them sync

/*
console.log("Task start");
function asyncTask(cb){
    console.log("Task processing");
    setTimeout(()=>{
        // no error , server data
        cb(null,name)
    },0);
}

asyncTask((err,data)=>{
    if(err){
       throw err;
    }
    else{
        console.log(data);
    }
});
console.log("Task end");
let name="Hri"
*/


// callback hell
/* 
    If we do something in Async mode but our logic of
    sequence should run in a Sync mode

*/

/*
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
*/

// make a callback function to write step wise execution
/*function Step1(cb){
    setTimeout(()=>{
        console.log("Step 1");
        cb();
    },1000)
}

function Step2(cb){
    setTimeout(()=>{
        console.log("Step 2");
        cb();
    },1000)
}

function Step3(cb){
    setTimeout(()=>{
        console.log("Step 3");
        cb();
    },1000)
}

console.log("Steps started");
Step1(()=>{
    Step2(()=>{
        Step3(()=>{
            console.log("Steps completed");
        })
    })
})
console.log("Async code running in bg ");
*/
MAKING TEA
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


// function filterArray(arr,cb){
//     let res=[];
//     arr.forEach(el => {
//         res.push(cb(el));
//     });
//     return res;

// }
// const ress=filterArray([1,2,3,4,5],(el)=>{
//     return (el*2);
// });
// console.log(ress);

// function greetUser(name,cb){
//     let namee=name;
//     if(cb){
//         cb(namee);
//     }
// }

// greetUser("Hri",function(name){
//     console.log("hello "+name);
// })


// function calculate(a, b, cb) {
//     if(cb){
//         cb(a,b);
//     }
// }

// calculate(5, 3, function(x, y) {
//     console.log(x + y);
// });


// function delayedLog(msg, delay, cb) {
//     if(cb){
//         setTimeout(() => {
//             console.log(msg);
//             cb();
//         }, delay);
//     }

// }

// delayedLog("This is delayed", 2000, function() {
//     console.log("Callback called after delay");
// });



// function login(username, cb) {
//     const users = ["hri","alex","sara"];
//     setTimeout(()=>{
//         // if user exists, return success
//         if(users.includes(username)){
//             cb(null, { status:"success",user:username });
//         } else {
//             cb("User not found", null);// error first callback style
//         }
//     }, 1000);
// }

// // Calling the login function
// login("hri", (err,result) =>{
//     if(err){
//         console.log("Error:",err);  
//     } else{
//         console.log("Login successful:", result);
//     }
// });

// login("john",(err,result)=>{
//     if(err){
//         console.log("Error:", err);
//     } else{
//         console.log("Login successful:", result);
//     }
// });


// function saveFile(cb){
//     setTimeout(()=>{
//         console.log("Saving a file in db");
//         cb();
//     },1000)
// }
// function backFile(cb){
//     setTimeout(()=>{
//         console.log("Saving a file in Cloud");
//         cb();
//     },1000)
// }
// function logfinish(cb){
//     setTimeout(()=>{
//         console.log(" File logged at : "+Date.now());
//         cb();
//     },1000)
// }


// saveFile(()=>{
//     backFile(()=>{
//         logfinish(()=>{
//             console.log("done");
//         })
//     })
// })

//error handling
// chain them properly, checking error at each step
// function task1(err,data,cb){
//     if(err==null){
//         console.log(data);
//     }
//     else{
//         console.log("error aa gaya");
//         return;
//     }
//     cb(null,"task2 start");
// }

// function task2(err,data,cb){
//     if(err==null){
//         console.log(data);
//     }
//     else{
//         console.log("error aa gaya");
//         return;
//     }
//     cb("error", "Task3 start");// error will come here
// }

// function task3(err,data,cb){
//     if(err==null){
//         console.log(data);
//     }
//     else{
//         console.log("error aa gaya");
//         return;
//     }
//     cb(null,"Done");
// }

// task1(null,"Ho gaya Task1",(err,data)=>{
//     task2(err,data,(err,data)=>{
//         task3(err,data,()=>{
//             console.log("done");
//         })
//     })
// })


// async function customMap(arr,callback){
//     let res=[];
//     // arr.forEach(ele => {
//     //   let element= callback(ele);
//     //    res.push(element);
//     // });
//     let number=await callback(ele);
//     res.push(number);
//     return res;
// }

// const doubled=customMap([1,2,3],num=>{setTimeout(()=>{num*2},1000)});
// console.log(doubled)

// eventual completion of our async code
// a father promises to get a car for his son

// const promise=new Promise((res,rej)=>{
//     console.log("Async task execution");
//     if(true){
//         res(200)
//     }
//     else{
//         rej();
//     }
// })

// promise.then((data)=>{
//    console.log("Passed")
//     console.log(data);
// }).catch(()=>{
//     console.log("failed");
// }).finally(()=>{
//     console.log("will always run");
// })

//promise chaining
// const p= Promise.resolve("Done");
// p
//     .then((data)=>{
//         console.log(data);
//         return "done2"
//     })
//     .then((data)=>{
//         console.log(data);
//         // we beed to return something in return else our chain will fail
//         return "done3"
//     })
//     .then((data)=>{
//         console.log(data);
//         return "finish";
//     })
//     .then((data)=>{
//         console.log(data);
//     }).catch((err)=>{
//         console.log(err);
//     })


// Promise Api

// promise.all() , promise().allSettled() , promise.race(), .promise.any() , 


// const makeApiCall=(time)=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Calling Api for data fetching");
//             res(200);
//         },time)
//     })
// }

// const makeApiCall1=(time)=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Calling Api for data fetching");
//             rej (new Error("error occurred"));
//         },time)
//     })
// }

// let multiApiCall=[makeApiCall1(1000),makeApiCall(2000),makeApiCall(3000)]
// Promise.race(multiApiCall)
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err.message);
//     })


// let numOps=(num)=>{
//     new Promise((res,rej)=>{
//         console.log(num);
//         res(num);
//     })
//     return p;
// }


// making promise chaining always return something inside our earlier promise from which we are chaining 
// numOps(10)
//     .then((res)=>{
//         console.log(res);
//         return res*2;
//     })
//     .then((res)=>{
//         console.log(res);  
//         return res+5;
//     })
//     .then((res)=>{
//         console.log(res);
 //     });

// const promise1 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 1 failed"), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 succeeded"), 2000));
// Promise.allSettled([promise1,promise2]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// ASYNC AWAIT-------------> When we use Async Await wrrap our execution into a Async function
// async function performTask() {
//     try{
//         const res=await userLogin();
//         const data=await userAuth(res);
//         console.log(data);
//     }
//     catch(err){
//         console.log(err)
//     }
    
// }
// IN ASYNC AWAIT ALWAYS WRAP OUR FUNCTION IN async keyword
// also put all the coe that can give error into try block and in case of any error use it using catch block code 



function fetchData() {
    return new Promise((resolve) => setTimeout(() => resolve("Data received"), 2000));
}

// fetchData()
//     .then((data) => {
//         console.log(data);
//         return "More data";
//     })
//     .then((moreData) => {
//         console.log(moreData);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

/*
    async function dataFetcher(){
        let data=await fetchData();
        console.log(data);
    }
    dataFetcher();


function delayedSum(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 1000);
    });
}

async function mathOps() {
    try{
        let res=await delayedSum(5,10);
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
*/

