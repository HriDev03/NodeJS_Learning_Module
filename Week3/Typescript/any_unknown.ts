// ANY AND UNKNOWN TYPE IS TS
// any type is the most flexible type in ts we are 
// kinda disabeling the type safety here 

let number:any=5;
number="Hridyesh"
console.log(number);

//api data, form data , dynamic data 
//migrations mai first do all in any then change it

/*

UNKNOW is better as there is still some level of type safety because it 
enforces type checking and type safety

*/

//  abhi nahi malum but future mai use krre ge
// unknown type ka number hai ji 
let num2:unknown;
num2=5;
num2="Sharma";
num2=true;

if(typeof num2 =="number"){
    console.log(num2+5);
}else if(typeof num2=="boolean"){
    console.log(num2);
}

//api can fetch all kinds of data so the return type is unknon here
/*
    async function fetchData(): Promise<unknown>{
        const response=await fetch("https://api.example.com/data");
        const data=await response.json();
        return data;  
    }

    async function  processData() {
        const ress=await fetchData();
        if(typeof ress==='obj'){
            //some code here bro
        }
    }
*/