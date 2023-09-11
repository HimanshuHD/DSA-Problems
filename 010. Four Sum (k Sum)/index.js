// **Three Sum with Multiplicity

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