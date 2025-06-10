function fetchData(callback) {
  setTimeout(() => {
    callback('rajma chawal');
  }, 1000);
}

module.exports = fetchData;
