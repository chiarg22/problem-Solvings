// Creata a function and pass an argument to it as an array.
// take the 2 loops and start the one from i=0 and another one from j=i+1 which will compare the each element with in arr[i].
// check if the arr[i] === 1 then create an anothe variable and using that swap the values.
//print the new arr as it contains the desired Output.

function sorted(x) {
  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
      if (x[i] === 1) {
        let lastVar = x[i];
        x[i] = x[j];
        x[j] = lastVar;
      }
    }
  }
  console.log(x);
}

sorted([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0]);
