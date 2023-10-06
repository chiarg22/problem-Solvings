arr = [1, 2, 3, 4, 5, 7, 9];

function LRU(arr, x) {
  if (arr.length > 0 && arr.length <= 8) {
    if (arr.includes(x)) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
          arr.splice(i, 1);
          arr.unshift(x);
        }
      }
    } else {
      arr.unshift(x);
    }
  }
  return arr;
}

console.log(LRU(arr, 10));
