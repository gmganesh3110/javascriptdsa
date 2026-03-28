// Write a recursive function called collectOddValues which accepts an array and returns a new array containing only the odd values from the original array.
function collectOddPure(arr) {
  let result = [];
  if (arr.length === 0) return result;
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  result = result.concat(collectOddPure(arr.slice(1)));
  return result;
}

console.log(collectOddPure([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Output: [1, 3, 5, 7, 9]

// Explanation: The function `collectOddPure` initializes an empty array `result` to store the odd values. It checks if the input array is empty, and if so, it returns the empty `result` array. If the first element of the input array is odd, it pushes that element into the `result` array. Then, it concatenates the result of a recursive call to `collectOddPure` with the rest of the input array (excluding the first element) using `slice(1)`. Finally, it returns the `result` array containing all the odd values from the original input array.

// Time complexity: O(n) where n is the length of the input array, since we need to check each element once.
// Space complexity: O(n) in the worst case if all elements are odd, as we would store all odd values in the `result` array. Additionally, the recursive call stack can also contribute to space complexity, but it is not significant in this case since we are not storing any additional data in the call stack.

// Alternative solution using an iterative approach
function collectOddIterative(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Test the iterative solution
console.log(collectOddIterative([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Output: [1, 3, 5, 7, 9]

// Edge cases:
console.log(collectOddPure([]));

// Output: []

// Explanation: If the input array is empty, the function should return an empty array since there are no odd values to collect.
console.log(collectOddPure([2, 4, 6, 8]));
// Output: []

// Explanation: If the input array contains only even numbers, the function should return an empty array since there are no odd values to collect.
console.log(collectOddPure([1, 3, 5, 7]));
// Output: [1, 3, 5, 7]
// Explanation: If the input array contains only odd numbers, the function should return an array containing all those odd numbers.
