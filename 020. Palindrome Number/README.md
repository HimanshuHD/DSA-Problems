# Palindrome Number

`Easy`

----------

## Problem Statement

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

### Problem Constraints

> `-231 <= x <= 231 - 1`

### Input Format

> An integer: `num`

### Output Format

> Returns a boolean: Whether the number is palindrome or not.

### Example Input

> `num = 12321`

### Example Output

> `true`

----------

## Solution

```javascript
// @param -  an integer: `num`
// @return - a bollean: Whether the number is palindrome or not.

var _isPalindrome = function(x) {
  if (x < 0) return false;
  let res = 0;
  let num = x;

  while (x > 0) {
    res = res * 10 + (x % 10);
    x = ~~(x/10);
  }

  if (res === num) return true;
  else return false;
};

let num = 12321;
console.log(`Is the given number ${num} a palindrome?`, _isPalindrome(num));
```

- Time Complexity: O($n$)
- Space Complexity: O($1$)

----------
