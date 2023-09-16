// **Longest Substring Without Repeating Characters

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