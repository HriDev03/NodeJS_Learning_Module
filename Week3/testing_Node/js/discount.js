
function calculateDiscount(price, discount) {
  if(price<0||discount<0){
    throw new Error('price and discount negative nahi hota');
  }

  if(discount>100) {
    throw new Error('free mai lega kya');
  }

  const discountedPrice=price-(price*discount)/100;
  return discountedPrice.toFixed(2)
}

module.exports = calculateDiscount;
