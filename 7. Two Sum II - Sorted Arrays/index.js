// **Two Sum II - Sorted Array

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