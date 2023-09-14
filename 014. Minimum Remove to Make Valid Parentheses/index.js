// **Minimum Remove to Make Valid Parentheses

let _minRemoveToMakeValid = function(s) {
    let parenthesesStack = [];
    s = s.split('');

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') parenthesesStack.push(i);
        else if (s[i] == ')') {
            if (parenthesesStack.length) parenthesesStack.pop();
            else s[i] = '';
        }
    }

    for (let i of parenthesesStack) s[i] = '';
    return s.join('');
};

let n = 'lee(t(c)o)de)';
console.log(`Valid string after removing parentheses is > `, _minRemoveToMakeValid(n));