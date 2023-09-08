# Two Sum

`Easy`
`Arrays`
`Map`

----------

## Problem Statement

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

> **Follow-up**: Can you come up with an algorithm that is less than O($n^2$) time complexity?

### Problem Constraints

> `2 <= nums.length <= 104`  
`-109 <= nums[i] <= 109`  
`-109 <= target <= 109`  
**Only one valid answer exists.**

### Input Format

> The First argument given is an array of integers: `nums`  
The Second argument given is an integer: `target`

### Output Format

> Return an array of indices of those two elements from `nums` which sums up to the `target`

### Example Input

> `nums = [3, 2, 4]`,  
`target = 6`

### Example Output

> `[1, 2]`

----------

## Solution

### Brute Force

> The brute force approach is simple. Loop through each element `x` and find if there is another value that equals to `target−x`.

- Time Complexity: O($n^2$)
- Space Complexity: O($1$)

### Optimal Approach

> We can reduce the lookup time from **O(n)** to **O(1)** by trading space for speed. A hash table is well suited for this purpose because it supports fast lookup in near constant time. The extra space required depends on the number of items stored in the hash table, which stores exactly `n` elements.

```javascript
// @param - an array of integers: `nums`  
// @param - an integer: `target`
// @return - an array of indices: of elements from `nums` which sums up to the `target`

let _findTwoSum = function(wordlist, querylist) {
    let hashMap = new Map();

    for (i in nums) {
        let complement = target - nums[i];
        if (hashMap.has(complement) && hashMap.get(complement) !== i)
            return [hashMap.get(complement), i];

        hashMap.set(nums[i], i)
    }
};

let nums = [2,7,11,15], target = 9
console.log(`Indices of elements which sums up to ${target} > `, _findTwoSum(nums, target));
```

- Time Complexity: O($n$)
- Space Complexity: O($n$)

> where `n` is the number of items in `nums`

----------
