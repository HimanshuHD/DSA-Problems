# Valid Parentheses

`Easy`
`Strings`
`Stack`
`Map`

----------

## Problem Statement

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

### Problem Constraints

> `1 <= s.length <= 104`  
`s` consists of parentheses only `'()[]{}'`.

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
// @param - an array of integers: `nums`  
// @param - an integer: `target`
// @return - an array of array of integers: of elements from `nums` which sums up to the `target`

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
