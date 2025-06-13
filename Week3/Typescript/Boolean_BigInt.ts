// BOOLEAN AND BIG INT DATA TYPES

//BOOLEAN : can be ether true or false , it is the basic primitive types in TS
let myOptions : boolean = true;
let isDone:boolean = true;


//is even
const iseven= (a:number):boolean=>{
   return a%2===0;
}

console.log("Ans of Is Even ",iseven(2));
console.log("Ans of Is Even ",iseven(3));
console.log("Ans of Is Even ",iseven(5));
console.log("Ans of Is Even ",iseven(6));

//is divisible by 4
const ans = (a:number):boolean=>{
    if(a%4==0 && a%8==0){
        return true;
    }else{
        return false;
    }
}

console.log(ans(16));  
console.log(ans(12));  
console.log(ans(24));  
console.log(ans(7));   

/*

BIGINT : it allows us to work wit numbers that are larger than the range supported by the regular number types

BIGINT LITERAL : they are written by appending the n suffix to an integer literal

 let num=112n
*/

// let bigNumber = Number.MAX_SAFE_INTEGER;
// console.log(bigNumber);

/*
    let bigNumber: bigint = 9007199254740991n;
    console.log(bigNumber);
*/

// let anotherBigNumber=BigInt("9007199254740997474741")
// console.log(anotherBigNumber);

let bigNumber = 9007199254740991n;
let anotherBigNumber = BigInt("9007199254740997474741");

let sum2: bigint = bigNumber + anotherBigNumber;
console.log("sum is "+sum2);  // Prints the correct sum as bigint
