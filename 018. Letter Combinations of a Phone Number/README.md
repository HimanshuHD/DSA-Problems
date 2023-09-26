# Letter Combinations of a Phone Number

`Medium`
`Arrays`
`Backtracking`

----------

## Problem Statement

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

![Telephone Keypad](./telephone-keypad.png)

### Problem Constraints

> `0 <= digits.length <= 4`  
`digits[i]` is a digit in the range `['2', '9']`.

### Input Format

> A string containing digits from '2-9': `digits`

### Output Format

> Returns an array of strings: All possible letter combinations that the number could represent

### Example Input

> `digits = "236"`

### Example Output

> `['adm', 'adn', 'ado', 'aem', 'aen', 'aeo', 'afm', 'afn', 'afo' 'bdm', 'bdn', 'bdo', 'bem', 'ben', 'beo', 'bfm', 'bfn', 'bfo', 'cdm', 'cdn', 'cdo', 'cem', 'cen', 'ceo', 'cfm', 'cfn', 'cfo']`

----------

## Solution

```javascript
// @param - a string containing digits from '2-9': digits
// @return - an array of strings: all possible letter combinations that the number could represent

// **Letter Combinations of a Phone Number

let _letterCombination_backtrack = function(map, digits, i, str, ans) {
    for(let ch of map[digits[i]]+"") {
        str[i] = ch;
        if (i < digits.length - 1)
            _letterCombination_backtrack(map, digits, i+1, str, ans);
        else
            ans.push(str.join(''));
    }
    return ans;
};

let letterCombinations = function(digits) {
    let letterNumberMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    if (digits.length == 0) return [];
    else return _letterCombination_backtrack(letterNumberMap, digits, 0, [], []);
};

let digits = "236";
console.log(`All possible letter combinations for digits ${digits} are >`, letterCombinations(digits));
```

- Time Complexity: O($4^n$) - In the worst case, each digit can represent 4 letters, so there will be 4 recursive calls for each digit.
- Space Complexity: O($n$)

> where `n` is the length of the input string.

----------
