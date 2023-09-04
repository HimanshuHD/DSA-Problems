# Maximum Path in Triangle
## Dynamic Programming

`param A : array of array of integers`
`return an integer`

----------

```javascript
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

----------

- Time Complexity: O($n^2$)
- Space Complexity: O($n^2$)
- To improve Space Complexity we can use the same input array A instead of new array name MP,then Space Complexity: O($1$)