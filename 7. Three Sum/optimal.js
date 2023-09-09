// **Three Sum

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums);
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
            // if (_lp > i+1 && nums[_lp - 1] === nums[_lp]) {
            //     _lp++;
            //     continue;
            // }

            let sum = nums[_lp] + nums[_rp];
            if (sum === target) {
                ans.push([nums[i], nums[_lp], nums[_rp]]);
                // Keep incrementing lower pointer (_lp)
                // Till the element at _lp is equal to its adjacent element (Optimization)
                while (nums[_lp + 1] === nums[_lp]) _lp++;
                while (nums[_rp - 1] === nums[_rp]) _rp--;
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

let nums = [-1,0,1,2,-1,-4,3,2, 3]
console.log(`Indices of elements which sums up to > `, _threeSum(nums));