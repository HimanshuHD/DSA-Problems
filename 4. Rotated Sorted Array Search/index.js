// **Rotated Sorted Array Search

let _searchItem = function(inputArr, target) {
  let start = 0, end = inputArr.length-1, mid;

  while (end >= start) {
    mid = Math.floor((start + end) / 2);
    if(inputArr[mid] === target) {
      return mid;
    }
    // Check if first half is unformly increasing sub-array
    else if (inputArr[mid] > inputArr[start]) {
      // Check if target is lying in the first half
      if (target >= inputArr[start] && target <= inputArr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // Check if target is lying in the second half
      if (target >= inputArr[mid] && target <= inputArr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

let A = [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Target found at index > ', _searchItem(A, 11));