// Creata a function and pass an argument to it
// take another empty array and the 2 loops.
// check if the arr[i] === 0 then push 0 into the arr2 and do the same for 1.
//print the new arr2 as it contains the desired Output.

function sorted(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr2.push(0);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      arr2.push(1);
    }
  }
  console.log(arr2);
}

sorted([1, 0, 1, 0, 0, 0, 0, 0, 1, 1]);
