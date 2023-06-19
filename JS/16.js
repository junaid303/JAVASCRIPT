
var list = [1, 2, 3];

function doublelItems(input) {
  for (var i = 0; i < input.length; i += 1) {
    input[i] = input[i] * 2;
  }
}
doublelItems(list);
var result = list[1];

console.log(result);