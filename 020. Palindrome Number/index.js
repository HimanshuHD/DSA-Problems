// **Palindrome Number

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
