# Longest Substring Without Repeating Characters

`Medium`
`Strings`
`Set`

----------

## Problem Statement

Given a string `s`, find the length of the longest substring without repeating characters.

### Problem Constraints

> `0 <= s.length <= 5 * 104`  
`s` consists of english letters, digits, symbols and spaces

### Input Format

> The First and only argument given is a string which consists of english letters, digits, symbols and spaces: `s`

### Output Format

> Returns a integer: Length of longest substring without repeating characters

### Example Input

> `s = "abcabcbb"`

### Example Output

> `3`

----------

## Solution

```javascript
// @param - a string consisting of english letters, digits, symbols and spaces: s
// @return - an integer: length of longest substring without repeating characters

let _lengthOfLongestSubstring = function(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    if (s.length <= 1) return s.length;

    for (let i = 0; i < s.length; i++) {
        while (charSet.has(s[i])) {
            charSet.delete(s[left++]);
        }
        charSet.add(s[i]);
        maxLength = Math.max(maxLength, i - left + 1);
    }

    return maxLength;
};

let str = 'abcabcbb';
console.log(`Length of longest substring withoutrepeating characters is > `, _lengthOfLongestSubstring(str));
```

- Time Complexity: O($n$)
- Space Complexity: O($n$)

----------
