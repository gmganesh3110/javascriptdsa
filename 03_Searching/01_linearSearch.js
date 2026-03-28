// Linear Search Algorithm
// Write a function that takes an array and a target value, and returns the index of the target value in the array. If the target value is not found, return -1.

//  Pseudocode:
// 1. Loop through the array from the beginning to the end.
// 2. For each element in the array, check if it is equal to the target value.
// 3. If it is equal, return the index of that element.
// 4. If we finish looping through the array and do not find the target value, return -1.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Test cases
console.log(linearSearch([1, 2, 3, 4, 5], 3));
// Output: 2
// Explanation: The function `linearSearch` iterates through the array `[1, 2, 3, 4, 5]` and checks each element against the target value `3`. When it finds a match at index `2`, it returns that index.
console.log(linearSearch([1, 2, 3, 4, 5], 6));
// Output: -1

// Time complexity: O(n) where n is the length of the input array, since in the worst case we may have to check each element once.
// Space complexity: O(1) since we are not using any additional data structures that grow with the input size.

// Edge cases:
console.log(linearSearch([], 1));

// Output: -1
