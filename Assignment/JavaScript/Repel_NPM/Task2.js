// Q2) FETCH DATA FROM A DUMMY API
const axios = require('axios');
async function getData(){
        // jab saara data aa jaaye then store it in data
        let data=await axios.get("https://jsonplaceholder.typicode.com/users");
        return data;
}

getData()
    .then((res)=>console.log(res))
    .catch((err)=>{
        console.log(err);
    })