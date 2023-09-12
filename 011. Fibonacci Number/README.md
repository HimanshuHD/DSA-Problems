# Fibonacci Number

`Easy`
`Dynamic Programming`
`Memoization`

----------

## Problem Statement

The **Fibonacci numbers**, commonly denoted `F(n)` form a sequence, called the **Fibonacci sequence**, such that each number is the sum of the two preceding ones, starting from `0` and `1`. That is,

> `F(0) = 0`, `F(1) = 1`  
`F(n) = F(n - 1) + F(n - 2)`, for `n > 1`.

Given `n`, calculate `F(n)`.

### Problem Constraints

> `0 <= n <= 30`

### Input Format

> The First and only argument given is an integer: `n`

### Output Format

> Returns an integer: `$n^th$` term in the **Fibonacci sequence**

### Example Input

> `n = 8`

### Example Output

> `21`

----------

## Solution

```javascript
// @param - an integer: `n`
// @return - an integer: nth term in the Fibonacci Sequence

let _nthFibonacci = function(n) {
    let fibNum = new Array(n);
    fibNum[0] = 0;
    fibNum[1] = 1;

    for (let i = 2; i <= n; i++) {
        fibNum[i] = fibNum[i-1] + fibNum[i-2];
    }

    return fibNum[n];
};

let n = 8;
console.log(`${n}th Fibonacci number is > `, _nthFibonacci(n));
```

- Time Complexity: O($n$)
- Space Complexity: O($n$)

----------
