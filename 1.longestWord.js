function longestWord(str) {
  let x = str.split(" "); // " " this is single space
  //   console.log(x);
  let longest = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i].length > longest) {
      longest = x[i].length;
    }
  }
  return longest;
}

console.log(longestWord("My name is Ankit jain and I am from Morena"));
