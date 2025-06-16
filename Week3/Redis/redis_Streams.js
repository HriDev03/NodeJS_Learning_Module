What Are Redis Streams?
Redis Streams are like append-only logs, useful for:

Tracking user activity

Sensor or event data

Notifications or message queues

They are high-throughput and stored in main memory, so they’re super fast.

✅ Simple Example: Logging User Actions in a Stream
js
Copy code
const client = require('./client'); // Your Redis client

async function streamExample() {
  // 👤 Add user actions to a stream
  await client.xAdd('user_actions', '*', {
    user: 'Hri',
    action: 'login'
  });

  await client.xAdd('user_actions', '*', {
    user: 'Hri',
    action: 'viewed_dashboard'
  });

  await client.xAdd('user_actions', '*', {
    user: 'Hridy',
    action: 'logout'
  });

  // 📏 Get total number of entries in the stream
  const length = await client.xLen('user_actions');
  console.log('Stream length:', length); // Output: 3

  // 📚 Read all entries in the stream using XRANGE
  const entries = await client.xRange('user_actions', '-', '+');
  console.log('All entries:');
  console.log(entries);

  // 👓 Read the latest entry using XREAD
  const latest = await client.xRead({
    streams: { user_actions: '$' }, // `$` means latest
    count: 1,
    block: 5000 // wait up to 5 seconds if nothing is new
  });

  console.log('Latest (new) entry:', latest);
}

streamExample();
// 🔍 Redis Stream Commands Explained:
// Command	What it Does
// XADD stream * key value	Adds an entry to a stream, * auto-generates an ID
// XRANGE stream - +	Gets all entries in the stream (from start to end)
// XLEN stream	Returns number of entries in the stream
// XREAD	Reads new entries (can block until new data arrives)

// 🧠 Typical Use Cases:
// Logging user actions (e.g., login, clicks)

// Storing fast-changing data (e.g., sensor readings)

// Message queue or notification system

