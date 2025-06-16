const client = require('./client'); // Redis client instance

async function sortedSetExample() {
  // Add members with scores to the sorted set
  await client.zAdd("score", [
    { score: 10, value: "Hri" },
    { score: 4, value: "Hridy" },
    { score: 3, value: "Hridyesh" },
    { score: 1, value: "SharmaJi ka ladka" }
  ]);

  // Sorted by score (low to high)
  const ascending = await client.zRange("score", 0, -1);
  console.log("ZRANGE score 0 -1 (ascending):", ascending);
  // Output: ['SharmaJi ka ladka', 'Hridyesh', 'Hridy', 'Hri']

  // Sorted by score (high to low)
  const descending = await client.zRevRange("score", 0, -1);
  console.log("ZREVRANGE score 0 -1 (descending):", descending);
  // Output: ['Hri', 'Hridy', 'Hridyesh', 'SharmaJi ka ladka']

  // Get the rank of a specific user (ascending order)
  const rank = await client.zRank("score", "Hri");
  console.log("ZRANK of Hri:", rank);
  // Output: 3 (0-based index in ascending order)
}

sortedSetExample();
