var names = ["amy", "bob", "helen", "amir", "carmen"];
var namesContainingA = names.filter(function (name) {
  return name.indexOf("h") >= 0;
});
var result = namesContainingA.length;

console.log(result);