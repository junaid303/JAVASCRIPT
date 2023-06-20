function getInitials(sentence) {
  var words = sentence.toLowerCase().split("");
  var initials = words.map(function (word) {
      return word.charAt(0);
  });
  return initials.join("");

}

var result = getInitials("Fly me to the moon");
console.log(result);