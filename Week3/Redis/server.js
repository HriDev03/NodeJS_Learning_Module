const express = require("express");
const axios = require("axios").default;
const client = require("./client"); // your Redis client

const app = express();

app.get('/', async (req, res) => {
  try {
    const cache = await client.get('todos');

    if (cache) {
      const ttl = await client.ttl('todos');
      console.log('TTL for todos:', ttl);  // Log TTL when cached data is served
      return res.json(JSON.parse(cache)); // Send cached version
    }

    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");

    await client.set('todos', JSON.stringify(data)); // Store as string
    await client.expire('todos', 30); // Expires in 30 seconds

    //time to life
    const ttl = await client.ttl('todos');
    console.log('TTL for todos (after set):', ttl); // Log TTL after setting key

    res.json(data); // Send fresh data
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});


/*
    without redis first time 
        Status: 200 OK
        Size: 17.88 KB
        Time: 1.58 s

    After redis
        Status: 200 OK
        Size: 17.88 KB
        Time: 486 ms
*/
