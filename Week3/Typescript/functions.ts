// FUNCTIONS IN TS

/*

    FUNCTION INVOCATION
        
        someFunc()
*/


//function declaration
// values defined in the function parameters
function greet(a:string,b:number){
    console.log(`Hello ${a} your empId is ${b}`);
}

const greet2=(a:string,b:number)=>{
    console.log(`Hello ${a} your empId is ${b}`);

}

//function invocation
//values passed while calling a function : arguments
greet("Hri",1);
greet2("Hridyesh",2);

//HOW TO SPECIFY FUNCTION RETURN TYPE IN TS
//return a string
const greet3=(a:string,b:number) : string =>{
    return(`Hello ${a} your empId is ${b}`);

}


//optional and default parameters in Ts , assign values to parameters itself

const greet4=(a:string, b : number = 1 ):string=>{
   return(`Welcome ${a} your id is ${b}`);
}

const emp=greet4("Hridy")
console.log(emp);


//optional parameters  ? after parameter
const greet5 = (a:string, b ?:number) => {
    return (`Welcome ${a} your id is ${b}`);
};
const employee = greet5("Hridy");
console.log(employee);
//9 thapa