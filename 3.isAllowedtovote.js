function isallowedtovote(age) {
  return age >= 18 ? "True" : "False";
}

console.log(isallowedtovote(19)); // Giving us the string value

function Validateage(age) {
  return age >= 18;
}

console.log(Validateage(19)); // Giving us the boolean value
