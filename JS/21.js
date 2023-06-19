
function canlegallyDrink(age) {
    var legal = age >= 18;
  
    if (legal) {
      return "vyes";
    } else {
      return "no";
    }
  }
  var result = canlegallyDrink(14);
  
  console.log(result);