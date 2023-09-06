// **Minimum Appends for Palindrome

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