const {PrismaClient } = require('@prisma/client')
//dont worry about connect, querrying etc
const prisma=new PrismaClient()
//hey prisma and start working with it
module.exports = prisma
