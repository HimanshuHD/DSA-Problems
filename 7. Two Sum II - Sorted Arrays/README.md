# Two Sum II - Sorted Array

`Easy`
`Sorted Arrays`
`Two Pointers`

----------

## Problem Statement

Given a 1-indexed array of integers `numbers` that is already **sorted in non-decreasing order**, find two numbers such that they add up to a specific target number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 < numbers.length`.

The tests are generated such that there is **exactly one solution**. You may not use the same element twice.

> Your solution must use only constant extra space.

### Problem Constraints

> `2 <= numbers.length <= 3 * 104`  
`-1000 <= numbers[i] <= 1000`  
`-1000 <= target <= 1000`  
`numbers` is sorted in **non-decreasing order.**  
**The tests are generated such that there is exactly one solution.**

### Input Format

> The First argument given is an array of integers: `nums`  
The Second argument given is an integer: `target`

### Output Format

> Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.

### Example Input

> `numbers = [2,7,11,15]`,  
`target = 9`

### Example Output

> `[1, 2]`

----------

## Solution

```javascript
// @param - an array of integers: `nums`  
// @param - an integer: `target`
// @return - an array of indices: of elements from `nums` which sums up to the `target`

let _findTwoSum = function(numbers, target) {
    let _lp = 0, _rp = numbers.length-1;

    while (_lp < _rp) {
        if (numbers[_lp]+numbers[_rp] === target)
            return [_lp+1, _rp+1];
        else if (numbers[_lp]+numbers[_rp] < target)
            _lp++;
        else
            _rp--;
    }

    return [-1, -1];
};

let nums = [2,7,11,15], target = 9
console.log(`Indices of elements which sums up to ${target} > `, _findTwoSum(nums, target));
```

- Time Complexity: O($n$)
- Space Complexity: O($1$)

> where `n` is the number of items in `nums`

----------
