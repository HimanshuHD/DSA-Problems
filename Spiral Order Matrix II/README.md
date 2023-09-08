# Spiral Order Matrix II

`Easy`
`2D Array`

----------

## Problem Statement

Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.

### Problem Constraints

> 1 <= A <= 1000

### Input Format

> First and only argument is integer A

### Output Format

> Return a 2-D matrix which consists of the elements added in spiral order.

### Example Input

> 5

### Example Output

> [  
&nbsp;&nbsp;&nbsp;[ &nbsp;1, &nbsp;&nbsp;2, &nbsp;&nbsp;3, &nbsp;&nbsp;4, &nbsp;5],  
&nbsp;&nbsp;&nbsp;[16, 17, 18, 19, &nbsp;6],  
&nbsp;&nbsp;&nbsp;[15, 24, 25, 20, &nbsp;7],  
&nbsp;&nbsp;&nbsp;[14, 23, 22, 21, &nbsp;8],  
&nbsp;&nbsp;&nbsp;[13, 12, 11, 10, &nbsp;9]  
]

----------

## Solution

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
