function isNumeric(value) {
  // Check if a value is numeric (a number or a string representing a number)
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function Polish(a) {
  let b = [];
  let c = 0;
  for (let i = 0; i < a.length; i++) {
    // if(typeof a[i]==number)
    if (isNumeric(a[i])) {
      // If the element is a number, push it onto the stack
      b.push(parseFloat(a[i]));
      //   stack.push(parseFloat(token));
    } else {
      const operand2 = b.pop();
      const operand1 = b.pop();

      if (a[i] == "+") {
        c = operand1 + operand2;
        b.push(c);
      } else if (a[i] == "-") {
        c = operand1 - operand2;
        b.push(c);
      } else if (a[i] == "*") {
        c = operand1 * operand2;
        b.push(c);
      } else if (a[i] == "/") {
        c = operand1 / operand2;
        b.push(c);
      }
    }
  }
  return b[0];
  //   console.log(b);
  //   console.log(c);
}

a = ["2", "1", "+", "3", "*"];
console.log(Polish(a));
