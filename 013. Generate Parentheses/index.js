// **Generate Parentheses

let _generateParenthesisRec = function(str, pos, n, openCount, closeCount, res) {
    if (closeCount === n) {
        res.push(str.join(''));
        return;
    } else{
        if (openCount < n) {
            str[pos] = '(';
            _generateParenthesisRec(str, pos + 1, n, openCount + 1, closeCount, res);
        }
        if (closeCount < openCount) {
            str[pos] = ')';
            _generateParenthesisRec(str, pos + 1, n, openCount, closeCount + 1, res);
        }
    }
};

let _generateParenthesis = function(n) {
    const res = [];
    if (n > 0) {
        let parenthesisComb = new Array(2*n);
        _generateParenthesisRec(parenthesisComb, 0, n, 0, 0, res);
    }

    return res;
};

let n = 7;
console.log(`Valid Bracket combinations for '${n}' pair of brackets > `, _generateParenthesis(n));