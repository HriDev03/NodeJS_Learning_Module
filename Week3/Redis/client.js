// iss folder mai hum client banaye ge jiske through we are interacting with client
const Redis = require('ioredis')

//default port : 6379

// Connect to Redis Cloud
const client = new Redis({
  host: 'redis-10193.c322.us-east-1-2.ec2.redns.redis-cloud.com',
  port: 10193,
  username: 'default',
  password: 'DxJX7LaTN2FJouvp5JK826nVk8f9begb',
//   tls: {}
});

// Listen for errors
client.on('error', err => console.error('Redis Client Error', err));


module.exports=client