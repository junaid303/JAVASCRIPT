
function canlegallyDrink(age) {
    if (age >= 18) {
      return "legal";
    } else {
      return "illegal";
    }
  }
  var result = canlegallyDrink(25);
  
  console.log(result);