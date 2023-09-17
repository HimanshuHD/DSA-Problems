// **Minimum Number of Swaps to Make the String Balanced

let _minSwaps = function(s) {
    let open = 0, mismatch = 0;
    for(let ch of s) {
        if (ch === '[') open++;
        else {
            if (open > 0) open--;
            else mismatch++;
        }
    }

    return Math.ceil(mismatch/2);
};

let str = ']]][[[';
console.log(`Minimum swaps required to make string '${str}' valid is > `, _minSwaps(str));