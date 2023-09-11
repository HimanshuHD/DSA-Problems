// **Three Sum

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