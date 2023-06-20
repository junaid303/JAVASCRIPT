
function containsCarbon(compound) {
    if (compound.indexOf("C") !== -1) {
      return "yes";
    }
    return "no";
  }
  var result = containsCarbon("C02");
  
  console.log(result);