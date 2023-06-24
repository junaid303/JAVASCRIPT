function doRangesOverlap(range1, range2) {
    return range1.min <= range2.max && range1.max >= range2.min;
  }
  var firstRange = { min: 3, max: 7 };
  var secondRange = { min: 6, max: 10 };
  var result = doRangesOverlap(firstRange, secondRange);
  
  console.log(result);