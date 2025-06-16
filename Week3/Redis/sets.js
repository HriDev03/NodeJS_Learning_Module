const client = require('./client'); // your Redis client instance

async function setInit() {
  // Add elements to set "ip"
  console.log(await client.sadd("ip", 1));  // Output: 1 (new element added)
  console.log(await client.sadd("ip", 2));  // Output: 1 (new element added)
  console.log(await client.sadd("ip", 3));  // Output: 1 (new element added)
  console.log(await client.sadd("ip", 1));  // Output: 0 (already exists, not added)

  // Remove element '3' from set "ip"
  console.log(await client.srem("ip", 3));  // Output: 1 (removed)

  // Check membership of values in set "ip"
  console.log(await client.sismember("ip", 1)); // Output: 1 (is a member)
  console.log(await client.sismember("ip", 3)); // Output: 0 (not a member anymore)

    
  // 🔍 Get all current members of set "ip"
  const allIPs = await client.smembers("ip");
  console.log("All IPs in the set:", allIPs); // Output: ['1', '2']

  // Intersection of two sets: find common elements between setA and setB
  await client.sadd("setA", 1, 2, 3);
  await client.sadd("setB", 2, 3, 4);
  const intersection = await client.sinter("setA", "setB");
  console.log(intersection);  // Output: ['2', '3'] (common elements)
}

setInit();
