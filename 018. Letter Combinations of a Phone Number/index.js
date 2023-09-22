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
