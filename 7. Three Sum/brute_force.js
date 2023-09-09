// **Three Sum
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