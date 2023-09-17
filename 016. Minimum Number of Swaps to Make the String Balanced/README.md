# Minimum Number of Swaps to Make the String Balanced

`Medium`
`Strings`
`Stack`

----------

## Problem Statement

You are given a 0-indexed string `s` of even length `n`. The string consists of exactly `n / 2` opening brackets `'['` and `n / 2` closing brackets `']'`.

A string is called **balanced** if and only if:

- It is the empty string, or
- It can be written as `AB`, where both `A` and `B` are balanced strings, or
- It can be written as `[C]`, where `C` is a balanced string.

You may swap the brackets at any two indices any number of times.

Return the minimum number of swaps to make `s` balanced.

### Problem Constraints

> `n == s.length`  
`2 <= n <= 106`  
`n is even`  
`s[i] is either '[' or ']'`  
`The number of opening brackets '[' equals n / 2, and the number of closing brackets ']' equals n / 2`  

### Input Format

> The First and only argument given is a string which contains either `'['` or `']'`: `s`

### Output Format

> Returns an integer: Number of minimum swaps needed to make the string valid

### Example Input

> `s = "]]][[["`

### Example Output

> `2`

----------

## Solution

```javascript
// @param -a string which contains either '[' or ']': s
// @return - an integer: minimum swaps needed to make the string valid

let _minSwaps = function(s) {
    let open = 0, mismatch = 0;
    for(let ch of s) {
        if (ch === '[') open++;
        else {
            if (open > 0) open--;
            else mismatch++;
        }
    }

    return Math.ceil(mismatch/2);
};

let str = ']]][[[';
console.log(`Minimum swaps required to make string '${str}' valid is > `, _minSwaps(str));
```

- Time Complexity: O($n$)
- Space Complexity: O($1$)

----------
