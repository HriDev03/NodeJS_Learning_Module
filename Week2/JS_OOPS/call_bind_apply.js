//  CALL METHOD
let namee={
    firstName:"Hridyesh",
    lastName:"Sharma",
    homeTown:"Jammu",
    state:"J&K",
    printFullName:function(homeTown){
        console.log(`${this.firstName}  ${this.lastName} from ${this.homeTown} which is in ${this.state}`);
    }
}
namee.printFullName();

name2={
    firstName:"Rohit",
    lastName:"Sharma",
    //now i have to print it here one way can be to rewrite it thats not cool
}

//using call method we can do the fucntion borrowing
//we can borrow function from other objects and can use it with the data of some-other objects
//steps to use call
/*
    1) Take the function that needs to be called
    2)give the refrence , what we want this  "This" to be pointing to 
*/
namee.printFullName.call(name2,"Mumbai","Maharashtra")//where our this to be pointed, individual arguments

//CALL DETAILED

/*
  We know there is call stack in which there is global execution context and 
  then function context but we know for every function there forms different execution context so suppose if there is a function inside function , 
  then inside function and outer function both have differnet execution context
*/

function setUserName(userName){
    // complex db validations
    //jo bhi set krr rahe ho jo mai refrence de raha hu waha store krr do
    this.userName=userName;//yeh toh idhar set ho raha hai but i wanted it to be set here
}

/*  
    humne notice kiya ki username is not set , tho are function is working fineee, it is called but its context is removed soo that the outer function is not able to access its value of the username 
    it is called , if we put console statement we see it is called but the thing is , in call stack , when this inner function calls , its executin context removed so it does not contact with the outer function
    so to save reference of this we use call keyword // other method include bind method therefore , js has some methods which can be used to explicity call these methods
*/

 
function createUser(username,email,password){
    //for username dont take it directly, 
    // just pass username and itll set our username
    //now we need username access
    //humm iss username ka access bhi toh chahiyee
    // we need to hold the reference
    //jo bhi execution context hai , jo bhi variable bann rahe hai sab hold karnaa hai
    setUserName.call(this,username) 
    //jo this maine diya yaha store krr do sabh kuch
    this.email=email,
    this.password=password
}
 
const user=new CreateUser("hri","hri@xyz.com","@#$%1235678")
console.log(user);


//APPLY METHOD
//whats the difference between call and apply() only the way we pass the arguments
namee.printFullName.apply(name2,["Mumbai","Maharashtra"])//where our this to be pointed: refrence of this variable, list of arguments
//pass the arguments in the form of array list