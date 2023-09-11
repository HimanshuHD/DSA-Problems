# Four Sum or k Sum

`Medium`
`Arrays`
`Recursion`
`Two Pointers`

----------

## Problem Statement

Given an array `nums` of `n` integers, return an array of all the unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that:

- `0 <= a, b, c, d < n`
- `a, b, c, and d are distinct.`
- `nums[a] + nums[b] + nums[c] + nums[d] == target`

You may return the answer in any order.

### Problem Constraints

> `1 <= nums.length <= 200`  
`-109 <= nums[i] <= 109`  
`-109 <= target <= 109`

### Input Format

> The First argument given is an array of integers: `nums`  
The Second argument given is an integer: `target`

### Output Format

> Returns an array of array integer (quadruplets): All the quadruplets that sumd upto the `target`

### Example Input

> `arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]`,  
`target = 8`

### Example Output

> `[[2, 4, 1, 1], [3, 3, 1, 1], [2, 3, 2, 1]]`

----------

## Solution

```javascript
// @param - an array of integers: `nums`  
// @param - an integer: `target`
// @return - an array of array of integers: of elements from `nums` which sums up to the `target`

let _fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);

    return _kSum(nums, target, 0, 4);
};

let _kSum = function(nums, target, start, k) {
    let res = [];

    if (start === nums.length) return res;

    // If first element is greater than average value or last element is smaller than average value
    // Just return res, since there will be no possible element to select
    if (nums[start] > target / k || nums[nums.length - 1] < target / k) return res;

    if (k === 2) return _2Sum(nums, target, start);

    for (let i = start; i < nums.length; ++i) {
        if (i > start && nums[i-1] === nums[i]) continue;
        
        for (el of _kSum(nums, target - nums[i], i + 1, k - 1)) {
            res.push(el);
            res[res.length-1].push(nums[i]);
        }
    }

    return res;
};

let _2Sum = function(nums, target, start) {
    let res = [];
    let _lp = start, _rp = nums.length - 1;

    while (_lp < _rp) {
        if (_lp > start && nums[_lp - 1] === nums[_lp]) {
            _lp++;
            continue;
        } else if(_rp < nums.length - 1 && nums[_rp] === nums[_rp + 1]) {
            _rp--;
            continue;
        }

        if (nums[_lp] + nums[_rp] < target) _lp++
        else if (nums[_lp] + nums[_rp] > target) _rp--;
        else res.push([nums[_lp++], nums[_rp--]]);
    }

    return res;
};

let nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let target = 8;
console.log(`Quadruplets which sums up to ${target} > `, _fourSum(nums, target));
```

- Time Complexity: O($n^3$) - O($n^(k−1)$), or O($n^3$) for Four Sum i.e. `k=4`
- Space Complexity: O($n$) - We need O(k) space for the recursion. `k` can be the same as `n` in the worst case for the generalized algorithm.

> where `n` is the length of `nums`  
Note that, for the purpose of complexity analysis, we ignore the memory required for the output.

----------
