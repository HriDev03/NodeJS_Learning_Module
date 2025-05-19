
// Q3) USING promise.all() to fetch api in parallel

//                          HAPPY CASE

// Fuction to mimmic API fetching from a Dummy API 1

let dataFetching = new Promise((res,rej)=>{
    console.log("fetching data from api1");
    setTimeout(()=>{
        res("data fethed from Api1");
    },1000)
})

//Fuction to mimmic API fetching from a Dummy API 2
let dataFetching2 = new Promise((res1,rej)=>{
    console.log("fetching data from api2");
    setTimeout(()=>{
        res1("data fethed from Api2");
    },2000)
})

Promise.all([dataFetching,dataFetching2]).then((res,res1)=>{
    console.log("data fetched sucessfully");
    console.log(res);
    console.log(res1);
}).catch((err)=>{
    console.log("netwrok error occurred",err);
})

//                          ERROR CASE

//Fuction to mimmic API fetching from a Dummy API 1

let dataFetchingg = new Promise((res,rej)=>{
    console.log("fetching data from api1");
    setTimeout(()=>{
        res("data fethed from Api1");
    },1000)
})

//Fuction to mimmic API fetching from a Dummy API 2 , will show internal server error
let dataFetchingg2 = new Promise((res1,rej)=>{
    console.log("fetching data from api2");
    setTimeout(()=>{
        rej(500);
    },2000)
})

Promise.all([dataFetchingg,dataFetchingg2]).then((res,res1)=>{
    console.log("data fetched sucessfully");
    console.log(res);
    console.log(res1);
}).catch((err)=>{
    console.log("netwrok error occurred",err);
})

// wont give any resultant array

