import { PrismaClient } from '@prisma/client';

//this instance will be used to hit / do any querry
// just like an instance of class that we can use to make querries
const prisma=new PrismaClient({
    //kya querry db pe hit ho rahi hai we want to see it
    log:["query"]
    //jab querry hit ho rahi hai , toh humm dekhna chahte hai ki kyaa querr`y jaa rahi hai Prisa se DB Ko
})

export default prisma