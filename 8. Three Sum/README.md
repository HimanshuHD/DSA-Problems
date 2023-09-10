# Three Sum

`Medium`
`Arrays`
`Set`
`Two Pointers`

----------

## Problem Statement

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

> Notice that the solution set must not contain duplicate triplets.

### Problem Constraints

> `3 <= nums.length <= 3000`  
`-105 <= nums[i] <= 105`

### Input Format

### Output Format

### Example Input

> `nums = [-1, 0, 1, 2, -1, -4]`

### Example Output

> `[[-1,-1,2],[-1,0,1]]`

----------

## Solution

### Brute Force

```javascript
// @param - an array of integers: `nums`  
// @param - an integer: `target`
// @return - an array of indices: of elements from `nums` which sums up to the `target`

let _binarySearch = function(arr, key, low, high) {
    while (low < high) {
        let mid = ~~((low + high) / 2); // ~~ can be used as a shorthand for Math.floor()
        if (arr[mid] === key)
            return mid;
        else if (arr[mid] < key) low = mid+1;
        else high = mid - 1;
    }

    return -Infinity;
}

let _threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    let ans = [];
    let visited = new Set();
    
    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            let target = _binarySearch(nums, -sum, j+1, nums.length-1);

            if (target !== -Infinity) {
                let key = `${nums[i]} ${nums[j]} ${nums[target]}`;

                if (!visited.has(key)) {
                    visited.add(key);
                    ans.push([nums[i], nums[j], nums[target]]);
                }
            }
        }
    }

    return ans;
};

let nums = [-1, 0, 1, 2, -1, -4, 3, 2, 3];
console.log(`Indices of triplets which sums up to 0 > `, _threeSum(nums));
```

- Time Complexity: O($n^3$)
- Space Complexity: O($n$)

### Better Approach

```javascript
// @param - an array of integers: `nums`  
// @param - an integer: `target`
// @return - an array of indices: of elements from `nums` which sums up to the `target`

var _threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    let ans = [];
    let visited = new Set();

    for (let i = 0; i < nums.length; i++) {
        let target = -nums[i];
        // _lp - Left Pointer; _rp - Right Pointer
        let _lp = i + 1, _rp = nums.length - 1;

        while (_lp < _rp) {
            let sum = nums[_lp] + nums[_rp];

            if (sum === target) {
                let key = `${nums[i]} ${nums[_lp]} ${nums[_rp]}`
                
                if (!visited.has(key)) {
                    visited.add(key);
                    ans.push([nums[i], nums[_lp], nums[_rp]]);
                }

                _lp++;
            } else if (sum < target) {
                _lp++;
            } else _rp--;
        }
    }

    return ans;
};

let nums = [-1, 0, 1, 2, -1, -4, 3, 2, 3];
console.log(`Indices of triplets which sums up to 0 > `, _threeSum(nums));
```

- Time Complexity: O($n^2$)
- Space Complexity: O($n$)

----------

### Optimal Approach

```javascript
// @param - an array of integers: `nums`  
// @param - an integer: `target`
// @return - an array of indices: of elements from `nums` which sums up to the `target`

let _threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    
    let ans = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Check for equal adjacent elements, because result will be same for both the elements
        // So we can always ignore the next element (Optimization)
        // if (i > 0 && nums[i-1] === nums[i]) continue;
        if (nums[i] > 0) break;

        let target = -nums[i];
        // _lp - Left Pointer; _rp - Right Pointer
        let _lp = i + 1, _rp = nums.length - 1;

        while (_lp < _rp) {
            // Again check for adjacent equal elements, because result will be same for both the elements
            // So we can always ignore the next element (Optimization)
            if (_lp > i+1 && nums[_lp - 1] === nums[_lp]) {
                _lp++;
                continue;
            }
            if (_rp < nums.length-1 && nums[_rp + 1] === nums[_rp]) {
                _rp--;
                continue;
            }

            let sum = nums[_lp] + nums[_rp];

            if (sum === target) {
                ans.push([nums[i], nums[_lp], nums[_rp]]);
                // Keep incrementing lower pointer (_lp)
                // Till the element at _lp is equal to its adjacent element (Optimization)
                // while (nums[_lp + 1] === nums[_lp]) _lp++;
                // while (nums[_rp - 1] === nums[_rp]) _rp--;
                _lp++;
                _rp--;
            } else if (sum < target) {
                // while (nums[_lp + 1] === nums[_lp]) _lp++;
                _lp++;
            } else {
                // while (nums[_rp - 1] === nums[_rp]) _rp--;
                _rp--;
            }
        }

        // Keep incrementing i
        // Till the element at i is equal to its adjacent element (Optimization)
        while (nums[i + 1] === nums[i]) i++;
    }

    return ans;
};

let nums = [-1, 0, 1, 2, -1, -4, 3, 2, 3];
console.log(`Indices of triplets which sums up to 0 > `, _threeSum(nums));
```

- Time Complexity: O($n^2$)
- Space Complexity: O($1$)

----------
