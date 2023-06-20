
function getEmotion(happinessLevel) {
    var emotion;
    if (happinessLevel < 5) {
      emotion = ":(";
    } else if (happinessLevel === 5) {
      emotion = ":|";
    } else {
      emotion = ":)";
    }
    return emotion;
  }
  var result = getEmotion(7);
  
  console.log(result);