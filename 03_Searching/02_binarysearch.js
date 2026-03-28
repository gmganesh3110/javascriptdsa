// write a function that takes in a sorted array and a number and returns the index of the number in the array. If the number is not found, return -1.

// Binary search algorithm

// Pseudocode:
// 1. Initialize two pointers, left and right, to the start and end of the array respectively.
// 2. While left is less than or equal to right:
//    a. Calculate the middle index as the floor of the average of left and right.
//    b. If the middle element is equal to the target number, return the middle index.
//    c. If the target number is less than the middle element, move the right pointer to middle - 1.
//    d. If the target number is greater than the middle element, move the left pointer to middle + 1.
// 3. If the target number is not found, return -1.

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] != num && left <= right) {
    if (num < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === num ? middle : -1;
}

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
// Output: 4
// Explanation: The number 5 is located at index 4 in the array.
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));

// Output: -1
// Explanation: The number 10 is not found in the array, so the function returns -1.
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));

// Edge case: The number is located at the beginning of the array.
// Output: 0
// Explanation: The number 1 is located at index 0 in the array.
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));
// Output: 8
// Explanation: The number 9 is located at index 8 in the array.

// Time complexity: O(log n) where n is the length of the input array, since we are halving the search space with each iteration.
// Space complexity: O(1) since we are using a constant amount of space to store the pointers and middle index.

// Alternative solution using recursion
function binarySearchRecursive(arr, num, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === num) return middle;
  if (num < arr[middle])
    return binarySearchRecursive(arr, num, left, middle - 1);
  return binarySearchRecursive(arr, num, middle + 1, right);
}
