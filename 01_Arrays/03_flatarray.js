// Write a function that takes an array of nested arrays and returns a single flattened array.

const flatArray = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(flatArray([1, 2, 2, 3, 3, 3, 4, [434, [34, 34234, [34234]]]]));
// Output: [1, 2, 2, 3, 3, 3, 4, 434, 34, 34234, 34234]
// I will initialize an empty array `result` to store the flattened elements. Then, I will iterate through each element of the input array. If the element is an array, I will recursively call `flatArray` on that element and concatenate the result to `result`. If the element is not an array, I will simply push it to `result`. Finally, I will return the `result` array.

// Time complexity: O(n) where n is the total number of elements in the nested arrays
// Space complexity: O(n) since we are storing all the elements in the result array

// Alternative solution using the built-in `flat` method
const flatArray1 = (arr) => {
  return arr.flat(Infinity);
};

console.log(flatArray1([1, 2, 2, 3, 3, 3, 4, [434, [34, 34234, [34234]]]]));

// Output: [1, 2, 2, 3, 3, 3, 4, 434, 34, 34234, 34234]

// Edge cases:
console.log(flatArray([]));
// Output: []
console.log(flatArray([1, [2, [3, [4, [5]]]]]));
// Output: [1, 2, 3, 4, 5]
