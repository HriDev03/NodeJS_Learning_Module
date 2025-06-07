require('dotenv').config();
// HOW WE CAN INITIALISE THE CONNECTION SO THAT OUR API CAN COMMUNICATE WITH THE DB
const knex  = require("knex");
const knexFile=require("../knexfile");
const env = process.env.NODE_ENV || 'development';

// we can get config options that we will begetting from knex file
// we can get any required options from our knex file
const options=knexFile[env]

//we can export all the configs to the knex orm object
// we need to import it everywhere and we can do db operations

// initialising and exporting a knex index with selected configs
module.exports=knex(options);
// we are exporting the knex object and passing the configurations
// what is db url, what is client


