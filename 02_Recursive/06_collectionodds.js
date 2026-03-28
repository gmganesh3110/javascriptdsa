// Write a recursive function called collectOdds which accepts an array and returns a new array of all the odd values in the array.

function collectionOdds(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectionOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Output: [1, 3, 5, 7, 9]

// Explanation: The function `collectionOdds` initializes an empty array `result` to store the odd values. It defines a helper function `helper` that takes an array as input. If the input array is empty, it returns. Otherwise, it checks if the first element of the input array is odd (i.e., not divisible by 2). If it is odd, it pushes that element into the `result` array. Then, it calls itself recursively with the rest of the input array (excluding the first element) using `slice(1)`. Finally, it returns the `result` array containing all the odd values from the original input array.

// Time complexity: O(n) where n is the length of the input array, since we need to check each element once.
// Space complexity: O(n) in the worst case if all elements are odd, as we would store all odd values in the `result` array. Additionally, the recursive call stack can also contribute to space complexity, but it is not significant in this case since we are not storing any additional data in the call stack.

// Alternative solution using an iterative approach
function collectionOddsIterative(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(collectionOddsIterative([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// Output: [1, 3, 5, 7, 9]

// Edge cases:
console.log(collectionOdds([]));
// Output: []
// Explanation: If the input array is empty, the function should return an empty array since there are no odd values to collect.
console.log(collectionOdds([2, 4, 6, 8]));
// Output: []
// Explanation: If the input array contains only even numbers, the function should return an empty array since there are no odd values to collect.
console.log(collectionOdds([1, 3, 5, 7]));
// Output: [1, 3, 5, 7]
// Explanation: If the input array contains only odd numbers, the function should return an array containing all those odd numbers.
