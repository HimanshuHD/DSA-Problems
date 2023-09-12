// **Valid Parentheses

let _isValidBracketString = function(s) {
    const bracketStack = [];
    const bracketMapping = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);

    for (const bracket of s) {
        if (bracket === '(' || bracket === '{' || bracket === '[')
            bracketStack.push(bracket);
        else if (bracketStack.length === 0 || bracketMapping.get(bracket) !== bracketStack.pop()) return false
    }

    return bracketStack.length === 0;
};

let str = '()[()]{{}()}';
console.log(`'${str}' - Is this bracket string valid ? > `, _isValidBracketString(str));