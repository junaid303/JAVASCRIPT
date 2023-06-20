
function isVegetable(food) {
    var answer;
    if (food === "potato") {
      answer = "yes";
    } else if (food === "tomato") {
      answer = "no";
    } else {
      answer = "maybe";
    }
    return answer;
  }
  var result = isVegetable("tomato");
  
  console.log(result);