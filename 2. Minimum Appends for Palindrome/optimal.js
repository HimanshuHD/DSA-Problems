// **Minimum Appends for Palindrome

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