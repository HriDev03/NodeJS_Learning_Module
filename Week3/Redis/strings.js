
const client = require('./client');

async function stringInit() {
    await client.set("msg:1"," Hey Hri HELLO FROM THE SERVER")

    // await client.expire("msg:1",1)
    const result = await client.get('user:3');
    const resultMessage = await client.get('msg:1');
    console.log("Result:", result);
    console.log("Message:", resultMessage );

}

stringInit()