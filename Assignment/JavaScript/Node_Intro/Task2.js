// Q2) Process .argv
// process.argv
// used to pass command line arguments while running  Node 

const args = process.argv;
//enough arguments hai ?
if (args.length<5){
    console.log("Too few Arguments");
    process.exit(1);
}
    
//cmd line se numbers fetch karo 
const num1=parseFloat(args[2]);
const op=args[3];
const num2=parseFloat(args[4]);
let res;
//unn numbers pe operation karo
switch (op){
    case'+':
        res=num1+num2;
        break;
    case'-':
        res=num1-num2;
        break;
    case'*':
        res=num1*num2;
        break;
    case'/':
        if(num2 === 0) {
            console.log('cant Divide by zero');
            process.exit(1);
        }
        res=num1/num2;
        break;
    default:
        console.log('Error: Invalid operation');
        process.exit(1);
}
            
// Output the result
console.log(res);
        
            