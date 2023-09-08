# Maximum Path in Triangle

`Easy`
`2D Arrays`
`Dynamic Programming`

----------

## Problem Statement

Given a 2D integer array A of size N * N representing a triangle of numbers.

Find the maximum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

> NOTE:
>
- Adjacent cells to cell (i,j) are only (i+1,j) and (i+1,j+1)
- Row i contains i integer and n-i zeroes for all i in [1,n] where zeroes represents empty cells.

### Problem Constraints

> 0 <= N <= 1000  
0 <= A\[i][j] <= 1000

### Input Format

> First and only argument is an 2D integer array A of size N * N.

### Output Format

> Return a single integer denoting the maximum path sum from top to bottom in the triangle.

### Example Input

> A = [  
&nbsp;&nbsp;&nbsp;[7, 4, 0, 0]  
&nbsp;&nbsp;&nbsp;[2, 4, 6, 0]  
&nbsp;&nbsp;&nbsp;[8, 5, 9, 3]  
&nbsp;&nbsp;&nbsp;[3, 0, 0, 0]  
]

### Example Output

> 23

----------

## Solution

```javascript
// @param - an array of array of integers : A
// @return - an integer : minimum path value

let _maxPath_dp = function(A){
  let MP = new Array(A[0].length);
  for(let i = A[0].length-1; i >= 0; i--) {
    MP[i] = new Array(i);
    for(let j = 0; j < i+1; j++) {
      if (i === A[0].length-1) MP[i][j] = A[i][j];
      else MP[i][j] = max(MP[i+1][j], MP[i+1][j+1]) + A[i][j];
    }
  }
  return MP[0][0];
};

let max = function(a, b) {
    return a > b ? a : b;
};


let A = [[725,0,0,0,0,0,0,0,0,0],[479,359,0,0,0,0,0,0,0,0],[963,465,706,0,0,0,0,0,0,0],[146,282,828,962,0,0,0,0,0,0],[492,996,943,828,437,0,0,0,0,0],[392,605,903,154,293,383,0,0,0,0],[422,717,719,896,448,727,772,0,0,0],[539,870,913,668,300,36,895,704,0,0],[812,323,334,674,665,142,712,254,869,0],[548,645,663,758,38,860,724,742,530,779]];
console.log('Maximum Path is > ', _maxPath_dp(A));
```

- Time Complexity: O($n^2$)
- Space Complexity: O($n^2$)
- To improve Space Complexity we can use the same input array A instead of new array MP,then Space Complexity: O($1$)

----------
