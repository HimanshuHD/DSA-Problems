// **Spiral Order Matrix II

let _printSpiralMatrix = function(n) {
  let spiralArr = new Array(n);
  for (let i = 0; i < n; i++)
    spiralArr[i] = new Array(n);

  let count = 1, row = 0, col = 0;
  while (n > 1) {
    for (let j = 0; j < n-1; j++) {
      spiralArr[row][col] = count;
      col++;
      count++;
    }

    for (let j = 0; j < n-1; j++) {
      spiralArr[row][col] = count;
      row++;
      count++;
    }

    for (let j = 0; j < n-1; j++) {
      spiralArr[row][col] = count;
      col--;
      count++;
    }

    for (let j = 0; j < n-1; j++) {
      spiralArr[row][col] = count;
      row--;
      count++;
    }
    row++;
    col++;
    n -= 2;
  }
  if (n == 1) spiralArr[row][col] = count;
  return spiralArr;
};

console.log('Spiral Matrix > ', _printSpiralMatrix(6));