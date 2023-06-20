
var letters = "abcdefghijklmnopgrstuvwzyz";
var lettersArray = letters.split('');
function letterForNumber(input) {
  if (input < 1 || input > 26) {
    return '-';
  }
  return lettersArray[input-1];
}
var result = letterForNumber(3);

console.log(result);