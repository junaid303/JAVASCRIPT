function getVectorMagnitude(x, y) {
    var magnitudeSquared = x * x + y * y;
    return Math.sqrt(magnitudeSquared);
  }
  var result = getVectorMagnitude(3, 4);
  
  console.log(result);