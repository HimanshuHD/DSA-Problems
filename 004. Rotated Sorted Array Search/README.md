# Rotated Sorted Array Search

`Medium`
`Arrays`
`Binary Search`

----------

## Problem Statement

Given a sorted array of integers A of size N and an integer B, where array A is rotated at some pivot unknown beforehand.

For example, the array [0, 1, 2, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2].

Your task is to search for the target value B in the array. If found, return its index; otherwise, return -1.

You can assume that no duplicates exist in the array.

> *NOTE: You are expected to solve this problem with a time complexity of O(log(N)).*

### Problem Constraints

> 1 <= N <= 1000000  
1 <= A[i] <= 109  
All elements in A are Distinct.

### Input Format

> The First argument given is the integer array A.  
The Second argument given is the integer B.

### Output Format

> Return index of B in array A, otherwise return -1

### Example Input

> A = [4, 5, 6, 7, 0, 1, 2, 3]  
B = 4

### Example Output

> 0

----------

## Solution

### Brute Force Approach

> To solve this problem we can simply use the **Linear Search Algorithm** which is a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.

- Time Complexity: O($n$)
- Space Complexity: O($1$)

### Optimal Approach

```javascript
// @param - an array of integers : A (A is sorted and is rotated at some pivot unknown beforehand)
// @param - an integer : target (we need to search in array A)
// @return - an integer : index from array A where the target is found, else -1

let _searchItem = function(A, target) {
  let start = 0, end = A.length-1, mid;

  while (end >= start) {
    mid = Math.floor((start + end) / 2);
    if(A[mid] === target) {
      return mid;
    }
    // Check if first half is unformly increasing sub-array
    else if (A[mid] > A[start]) {
      // Check if target is lying in the first half
      if (target >= A[start] && target <= A[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // Check if target is lying in the second half
      if (target >= A[mid] && target <= A[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

let inputArr = [10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Target found at index > ', _searchItem(inputArr, 11));
```

- Time Complexity: O($log$ $n$)
- Space Complexity: O($1$)

----------
