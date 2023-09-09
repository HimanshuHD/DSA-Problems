// **Two Sum

let _findTwoSum = function(nums, target) {
    let hashMap = new Map();
    // for (i in nums) {
    //     hashMap.set(nums[i], i);
    // }

    for (i in nums) {
        let complement = target - nums[i];
        if (hashMap.has(complement) && hashMap.get(complement) !== i)
            return [hashMap.get(complement), i];

        hashMap.set(nums[i], i)
    }
};

let nums = [2,7,11,15], target = 9
console.log(`Indices of elements which sums up to ${target} > `, _findTwoSum(nums, target));