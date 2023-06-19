
function getResult(value) {
    return typeof value === "number" ? "numeric" : "other";
  }
  var result = getResult("10");
  