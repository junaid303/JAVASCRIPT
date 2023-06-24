var animalSoundMap = {
    sheep: "baa",
    cat: "meow",
    cow: "moo",
    fox: "ring-ding-ding-ding-ding-ring-ding",
  };
  
  function getanimalSound(animal) {
    var sound = animalSoundMap[animal];
    if (sound) {
      return sound;
    }
    return "woof";
  }
  var result = getanimalSound("elephant");
  
  console.log(result);