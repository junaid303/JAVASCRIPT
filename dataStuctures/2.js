function processArray(values) {
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
      sum += values[i];
    }
    return sum;
  }
  var result = processArray([1, 2, 3, 41]);
  
  console.log(result);