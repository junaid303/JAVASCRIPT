function prefixString(prefix, value) {
    return (prefix || "$") + value;
  }
  var result = prefixString(null, "1,000");
  
  console.log(result);