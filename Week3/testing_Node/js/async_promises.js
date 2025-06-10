function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Rajma Chawal');
    }, 100);
  });
}
module.exports=fetchData