// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client:'pg',
    connection:{
      host:'localhost',
      user:'Hri03',
      password:'14112607Hri@',
      database:'knex_Express',
      charset:'utf8'
    },
    migrations:{
      directory:__dirname+'/knex/migrations',
    },
    seeds:{
      directory:__dirname+'/knex/seeds'
    }
  }
};
