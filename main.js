var count = items.length;

var sum = 0;
items.forEach(function(item) {
  sum += item.price;
});
var avg = (sum/count).toFixed(2);
console.log("The average price is $" + avg);


var itemsInRange = []
items.forEach(function(item) {
  if(item.price >= 14 && item.price <= 18)
    itemsInRange.push(item);
});
console.log("Items that cost between $14.00 USD and $18.00 USD:", itemsInRange);
