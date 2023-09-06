# Spiral Order Matrix II

`Easy`
`2D Array`

----------

```javascript
// @param - an integer : n (representing number of rows and columns in the matrix)
// @return - an array of array of integers (2D array) : a spiral matrix of order nXn

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
```

- Time Complexity: O($n^2$)
- Space Complexity: O($1$) : Since *spiralArr* is for output purpose; contributing to output space; hence this will not be contributing to Space Complexity.

----------
