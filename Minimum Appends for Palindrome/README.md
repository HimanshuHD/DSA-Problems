# Minimum Appends for Palindrome

`Easy`
`Dynamic Programming`

----------

## Brute Force Approach

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

----------

## Optimal Approach

```javascript
// @param - a string of length n : str
// @return - an integer : minimum character that needs to be appended
```

- Time Complexity: O($$)
- Space Complexity: O($$)

----------