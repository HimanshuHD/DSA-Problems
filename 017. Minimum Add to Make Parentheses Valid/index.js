// **Minimum Add to Make Parentheses Valid

let _minAddToMakeValid = function(s) {
    let bal = 0; ans = 0;

    for (const ch of s) {
        if (ch === '(') bal++;
        else if (bal > 0) bal--;
        else ans++;
    }

    return ans + bal;
};

let str = ')))((';
console.log(`Minimum addition required to make string '${str}' valid is > `, _minAddToMakeValid(str));