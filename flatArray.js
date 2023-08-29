var searchMatrix = function (matrix) {
  //   let k = 0;
  empty = "";
  //   empty2 = [];
  m = matrix.length;
  var n = 0;
  console.log(m);
  // n = matrix[i].length;
  for (let x = 0; x < m; x++) {
    n = matrix[x].length;
  }
  console.log(n);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      empty = empty + matrix[i][j];
    }
  }
  return empty;
};

console.log(
  searchMatrix([1, 2], [3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15])
);
