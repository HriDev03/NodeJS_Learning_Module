const client = require('./client'); // your Redis client instance

async function hashInit(){
 
    await client.hSet('bike:1',{model:'Pulsar', brand:"Bajaj", type:"Bajaj Bikes", price:"50K"})


    const model=await client.hGet('bike:1','model')
    console.log(model);
    const price=await client.hGet('bike:1','price')
    console.log(price);
    const bikee=await client.hGetAll('bike:1');
    // hmget to get multiple info
    const fields = await client.hmGet('bike:1',['model','price'])
    console.log(fields);
    console.log(bikee);

    //increasing price
    let increasedPrice=await client.hIncBy('bike:1','price',1000)
    console.log(increasedPrice);

    let decreasedPrice=await client.hIncBy('bike:1','price',-1000)
    console.log(decreasedPrice);


    
}
hashInit()