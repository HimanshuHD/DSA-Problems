# Generate Parentheses

`Medium`
`Strings`
`Recursion`
`Backtracking`

----------

## Problem Statement

Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

### Problem Constraints

> `1 <= n <= 8`

### Input Format

> The First and only argument given is a string representing number of pair of parentheses: `s`

### Output Format

> Returns an array: All posssible combination of valid parentheses

### Example Input

> `n = 3`

### Example Output

> `["((()))", "(()())", "(())()", "()(())", "()()()"]`

----------

## Solution

```javascript
// @param - a string consisting of brackets only: s
// @return - a boolean: true or false based on whether input string is valid or not

let _generateParenthesisRec = function(str, pos, n, openCount, closeCount, res) {
    if (closeCount === n) {
        res.push(str.join(''));
        return;
    } else{
        if (openCount < n) {
            str[pos] = '(';
            _generateParenthesisRec(str, pos + 1, n, openCount + 1, closeCount, res);
        }
        if (closeCount < openCount) {
            str[pos] = ')';
            _generateParenthesisRec(str, pos + 1, n, openCount, closeCount + 1, res);
        }
    }
};

let _generateParenthesis = function(n) {
    const res = [];
    if (n > 0) {
        let parenthesisComb = new Array(2*n);
        _generateParenthesisRec(parenthesisComb, 0, n, 0, 0, res);
    }

    return res;
};

let n = 7;
console.log(`Valid Bracket combinations for '${n}' pair of brackets > `, _generateParenthesis(n));
```

- Time Complexity: O($2^n$)
- Space Complexity: O($n$)

----------
