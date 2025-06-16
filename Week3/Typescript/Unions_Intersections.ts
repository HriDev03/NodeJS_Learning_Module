// two sets , union : common data + uncommon data of set A/B : |
//            Intersection : only elements present in both the sets : &


// ek input field hai , where there is description , abb user waha kuch bhi de sakta hai 
const inputVal=(value:string| number | boolean):void=>{
    console.log(value);
}

inputVal(55)
inputVal("Hello World")
inputVal(false)


const userInput=(value:string|number):string | number=>{
    if(typeof(value)==='number'){
        return value*2;
    }else if(typeof(value)==='string'){
        return value.toUpperCase();
    }else{
        throw new Error('Invalid Input Data')
    }
}

console.log(userInput(10));
console.log(userInput("hridyesh"));


/*
    Intersection
    
    set a mai jitna data hoga , aur jo set b mai jitna data hoga 
    voh likhna hii padega

    agar mai company mai kaam krr raha hu then they need my name, my empId
    but company ke bahar aake i need my name, age, place i belong to 

*/

//yeh mera personal data
type SomePerson ={
    name:string,
    age:number
}

//yeh mera company related data
type Employee={
    emp_id:number,
    department:string
}

// i want to give my introduction , that will contain both my personal info and professional info
/*
    type EmployeeDetails=SomePerson | Employee

    const employeehu:EmployeeDetails={
        name:"hri",
        age:21,
        emp_id:111

    }
*/
type EmployeeDetails=SomePerson & Employee

// dono ki dono property honi chahiye
const employeehu:EmployeeDetails={
    name:"hri",
    age:21,
    emp_id:111,
    department:"IT"
}
console.log(employeehu);

type User={
    name:string,
    age:number
}

type MyLocation={
    city:string,
    country:string
}


const user:User={
    name:"Hri",
    age:20
}

const address:MyLocation={
    city:"Jammu",
    country:"India"
}
 
// const createUserProfile=(user:User,location:MyLocation):string=>{
//     return(`My name is ${user.name} and i am ${user.age}, I am living in ${location.city}`);
// }

const createUserProfile=(user:User,location:MyLocation):User & MyLocation=>{
    return{...user,...location};
}



//comple details ki baat
const myCompleteInfo:User&MyLocation=createUserProfile(user,address);
console.log(myCompleteInfo);
