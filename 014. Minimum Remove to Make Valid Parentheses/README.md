# Minimum Remove to Make Valid Parentheses

`Medium`
`Strings`
`Stack`

----------

## Problem Statement

Given a string `s` of `'('` , `')'` and lowercase English characters.

Your task is to remove the minimum number of parentheses ( `'('` or `')'`, in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

- It is the empty string, contains only lowercase characters, or
- It can be written as `AB` (`A` concatenated with `B`), where `A` and `B` are valid strings, or
- It can be written as `(A)`, where `A` is a valid string.

### Problem Constraints

> `1 <= s.length <= 105`  
`s[i]` is either`'('` , `')'`, or lowercase English letter.

### Input Format

> The First and only argument given is a string which contains either `'('` , `')'`, or lowercase english letter: `s`

### Output Format

> Returns a string: A valid parentheses string

### Example Input

> `s = "lee(t(c)o)de)"`

### Example Output

> `"lee(t(c)o)de"`

----------

## Solution

```javascript
// @param - a string consisting of brackets only: s
// @return - a boolean: true or false based on whether input string is valid or not

let _minRemoveToMakeValid = function(s) {
    let parenthesesStack = [];
    s = s.split('');

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') parenthesesStack.push(i);
        else if (s[i] == ')') {
            if (parenthesesStack.length) parenthesesStack.pop();
            else s[i] = '';
        }
    }

    for (let i of parenthesesStack) s[i] = '';
    return s.join('');
};

let str = 'lee(t(c)o)de)';
console.log(`Valid string after removing parentheses is > `, _minRemoveToMakeValid(str));
```

- Time Complexity: O($n$)
- Space Complexity: O($n$)

----------
