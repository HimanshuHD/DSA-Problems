# Minimum Add to Make Parentheses Valid

`Medium`
`Strings`
`Greedy`

----------

## Problem Statement

A parentheses string is valid if and only if:

- It is the empty string,
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or
- It can be written as `(A)`, where `A` is a valid string.

You are given a parentheses string `s`. In one move, you can insert a parenthesis at any position of the string.

> For example, if `s = "()))"`, you can insert an opening parenthesis to be `"(()))"` or a closing parenthesis to be `"())))"`.

Return the minimum number of moves required to make `s` valid.

### Problem Constraints

> `1 <= s.length <= 1000`  
`s[i]` is either `'('` or `')'`.

### Input Format

> The First and only argument given is a string which contains either `'('` or `')'`: `s`

### Output Format

> Returns an integer: Number of minimum additions needed to make the string valid

### Example Input

> `s = ")))(("`

### Example Output

> `5`

----------

## Solution

```javascript
// @param -a string which contains either '(' or ')': s
// @return - an integer: minimum additions needed to make the string valid

let _minAddToMakeValid = function(s) {
    let bal = 0; ans = 0;

    for (const ch of s) {
        if (ch === '(') bal++;
        else if (bal > 0) bal--;
        else ans++;
    }

    return ans + bal;
};

let str = ')))((';
console.log(`Minimum addition required to make string '${str}' valid is > `, _minAddToMakeValid(str));
```

- Time Complexity: O($n$)
- Space Complexity: O($1$)

----------
