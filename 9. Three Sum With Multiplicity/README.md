# Three Sum with Multiplicity

`Medium`
`Arrays`
`Set`
`Two Pointers`

----------

## Problem Statement

Given an integer array `arr`, and an integer `target`, return the number of tuples `i, j, k` such that `i < j < k` and `arr[i] + arr[j] + arr[k] == target`.

As the answer can be very large, return it modulo `$10^9 + 7$`.

### Problem Constraints

> `3 <= arr.length <= 3000`  
`0 <= arr[i] <= 100`  
`0 <= target <= 300`

### Input Format

> The First argument given is an array of integers: `nums`  
The Second argument given is an integer: `target`

### Output Format

> Returns an integer (modulo `$10^9 + 7$`): The number of tuples `i, j, k` such that `i < j < k` and `arr[i] + arr[j] + arr[k] == target`

### Example Input

> `arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]`,  
`target = 8`

### Example Output

> 20

----------

## Solution

```javascript
// @param - an array of integers: `nums`  
// @param - an integer: `target`
// @return - an array of indices: of elements from `nums` which sums up to the `target`

var _threeSumMulti = function(arr, target) {
    arr.sort((a, b) => a-b); 

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let _lp = i + 1, _rp = arr.length - 1;
        
        while (_lp < _rp) {
            if (arr[_lp] + arr[_rp] === target - arr[i]) {
                if (arr[_lp] !== arr[_rp]) {
                    let leftCount = 1, rightCount = 1;
                    while (_lp + 1 < _rp && arr[_lp+1] == arr[_lp]) {
                        leftCount++;
                        _lp++;
                    }
                    while (_rp - 1 > _lp && arr[_rp-1] == arr[_rp]) {
                        rightCount++;
                        _rp--;
                    }
                    count += leftCount * rightCount;
                    _lp++;
                    _rp--;
                } else {
                    count += (_rp - _lp + 1) * (_rp - _lp) / 2
                    break;
                }
            } else if (arr[_lp] + arr[_rp] < target - arr[i]) _lp++;
            else _rp--;
        }
    }

    return count % 1000000007;
};

let nums = [-1, 0, 1, 2, -1, -4, 3, 2, 3];
let target = 8;
console.log(` of triplets which sums up to 0 > `, _threeSumMulti(nums, target));
```

- Time Complexity: O($n^2$)
- Space Complexity: O($1$)

> where `n` is the length of `nums`

----------
