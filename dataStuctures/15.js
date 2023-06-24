var list = ["rock", "paper", "hard place", "scissors"];

function isInTrouble(item) {
  var index = list.indexOf(item);
  return index > list.indexOf("rock") && index < list.indexOf("hard place");
}
var result = isInTrouble("paper");

console.log(result);