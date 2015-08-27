var count = items.length;
console.log(count);

var sum = 0;
items.forEach(function(item) {
  sum += item.price;
});
console.log(sum);
var avg = (sum/count).toFixed(2);
console.log("The average price is $"+ avg);
