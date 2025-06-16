// its like a de-queue or like stack used for the management for background worker systems


const client = require('./client');

async function listInit() {
    await client.set("msg:1"," Hey Hri HELLO FROM THE SERVER")

    // await client.expire("msg:1",1)
    //inserting from left
    await client.lpush('fruits','mango');
    await client.lpush('fruits','apple');
    
    //inserting from right
    await client.rpush('fruits','banana');
    let fruit=await client.lpop('fruits');
    let fruitNum=await client.llen('fruits');
    
    //Lmove : used to move elements from one list to others
    //ltrim : reduces a list to specified range of elements
    
    //0 se last
    // used to read messages here ...

    let fruits = await client.lrange('fruits', 0, -1);
    let fruitss = await client.lrange('fruits', 1,3);
    
    const keys = await client.keys('fruits:*');
    console.log(keys);

    console.log(fruits);



    //BLOCKING COMMANDS : 
    /*
    
        BLPOP : Will be used to remove element from the head of the listInit, If it is empty , 
        the command is blocked until an element is available or until the specified timeout is reached
    


        BLPOP message 10
        remove krr dega , yaa firr will wait for the timer to end its execution
        will wait for the messages to come 

        // QUEUE : lpush, rpop 

        //Stack : lpush , lpop
    */
    
    console.log(fruit);
    console.log(fruitNum);
  
}

listInit()