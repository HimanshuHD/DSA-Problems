# Minimum Appends for Palindrome

`Medium`
`String`
`LPS Array`

----------

## Problem Statement

Given a string A consisting of lowercase characters.

We need to tell minimum characters to be appended (insertion at end) to make the string A a palindrome.

### Problem Constraints

> 1 <= |A| <= 105  
A consists only of lower-case characters.

### Input Format

> First and only argument is an string A.

### Output Format

> Return a integer denoting the minimum characters to be appended (insertion at end) to make the string A a palindrome.

### Example Input

> A = "abede"

### Example Output

> 2

----------

## Solution

### Brute Force Approach

```javascript
// @param - a string of length n : str
// @return - an integer : minimum character that needs to be appended

let _minAppends_brute = function(str){
  let i = 0;

  for (i = 0; i < str.length; i++) {
    if (_checkPalindrome(str.substring(i))) {
      break;
    }
  }
  return i;
};

let _checkPalindrome = function(str) {
  let isPalindrome = true;
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length-i-1]) isPalindrome = false;
  }
  return isPalindrome;
}

let inputStr = 'abacabab';
console.log('Minimum Appends for Palindrome > ', _minAppends_brute(inputStr));
```

- Time Complexity: O($n^2$)
- Space Complexity: O($1$)

### Optimal Approach

```javascript
// @param - a string of length n : str
// @return - an integer : minimum character that needs to be appended

let _minAppends_optimal = function(str){
  if (_checkPalindrome(str)) return 0;
  let tempStr = `${str.split('').reverse().join('')}#${str}`;
  return str.length - _computeLPSArray(tempStr)[tempStr.length-1];
};

let _checkPalindrome = function(str) {
  let isPalindrome = true;
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length-i-1]) isPalindrome = false;
  }
  return isPalindrome;
}

let _computeLPSArray = function(str) {
  let lpsArray = Array(str.length);
  let i = 0, j = 1;
  lpsArray[0] = 0;

  while (j < str.length) {
    if(str[i] == str[j]) {
      lpsArray[j] = i+1;
      i++;
      j++;
    } else {
      if (i != 0) i = lpsArray[i-1];
      lpsArray[j] = 0;
      j++;
    }
  }

  return lpsArray;
}

let inputStr = 'abacabab';
console.log('Minimum Appends for Palindrome > ', _minAppends_optimal(inputStr));
```

- Time Complexity: O($n$)
- Space Complexity: O($n$)

----------
