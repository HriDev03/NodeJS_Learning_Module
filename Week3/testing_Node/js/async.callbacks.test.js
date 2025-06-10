const fetchData = require('./async_callbacks.js');


test('fetches data with callback', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done(); // Notify Jest the async test is complete
  }

  fetchData(callback);
});
