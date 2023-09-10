// **Three Sum with Multiplicity

let _threeSumMulti = function(arr, target) {
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

let nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let target = 8;
console.log(`Indices of triplets which sums up to 0 > `, _threeSumMulti(nums, target));