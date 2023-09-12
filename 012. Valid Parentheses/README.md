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
`s` consists of brackets only `'()[]{}'`.

### Input Format

> The First and only argument given is a string of brackets only: `s`

### Output Format

> Returns a boolean: `true` or `false` based on whether input string is valid or not

### Example Input

> `s = '()[()]{{}()}'`

### Example Output

> `true`

----------

## Solution

```javascript
// @param - a string consisting of brackets only: s
// @return - a boolean: true or false based on whether input string is valid or not

let _isValidBracketString = function(s) {
    const bracketStack = [];
    const bracketMapping = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);

    for (const bracket of s) {
        if (bracket === '(' || bracket === '{' || bracket === '[')
            bracketStack.push(bracket);
        else if (bracketStack.length === 0 || bracketMapping.get(bracket) !== bracketStack.pop()) return false
    }

    return bracketStack.length === 0;
};

let str = '()[()]{{}()}';
console.log(`'${str}' - Is this bracket string valid ? > `, _isValidBracketString(str));
```

- Time Complexity: O($n$)
- Space Complexity: O($n$)

> where `n` is the length of input string `s`

----------
