const fetchData = require('./async_callbacks.js');

test('fetches data with callback', done => {
  function callback(data){
    expect(data).toBe('rajma chawal');
    // yeh humme bataye ga that the async execution is done 
    done();
  }

  fetchData(callback); // call with your test callback
});
