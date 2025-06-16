const client = require('./client'); // Redis client

async function geoExample() {
  // 🌍 Add locations (longitude, latitude, name) to a geospatial set
  await client.geoAdd('bikes:rentable', {
    longitude: 77.5946,  // Bangalore
    latitude: 12.9716,
    member: 'Bangalore Station'
  });

  await client.geoAdd('bikes:rentable', {
    longitude: 72.8777,  // Mumbai
    latitude: 19.0760,
    member: 'Mumbai Central'
  });

  await client.geoAdd('bikes:rentable', {
    longitude: 88.3639,  // Kolkata
    latitude: 22.5726,
    member: 'Kolkata Hub'
  });

  console.log('Bike rental locations added.');
}
geoExample();


//Example: Get Distance Between Two Locations

const distance = await client.geoDist('bikes:rentable', 'Bangalore Station', 'Mumbai Central', 'km');
console.log('Distance between Bangalore and Mumbai:', distance, 'km');

// Example: Find All Stations Within 500km of Bangalore
 
const nearby = await client.geoSearch('bikes:rentable', {
  from: 'member',
  member: 'Bangalore Station',
  by: 'radius',
  radius: 500,
  unit: 'km'
});

console.log('Nearby stations:', nearby);

/*

    Use Cases:
    
    Bike or scooter rentals

    Food delivery or ride-sharing apps

    Find nearest store, ATM, warehouse, etc.

    
*/
