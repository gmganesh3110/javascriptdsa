// Write a recursive function called sumRange which accepts a number and returns the sum of all numbers from 0 to that number

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(6));
// Output: 21

// Explanation: The function `sumRange` takes a number `num` as input. If `num` is 1, it returns 1. Otherwise, it returns the sum of `num` and the result of calling `sumRange` with `num - 1`. This effectively adds all numbers from `num` down to 1, resulting in the total sum from 0 to `num`.

// Time complexity: O(n) where n is the input number `num`
// Space complexity: O(n) due to the recursive call stack.

// Alternative solution using the formula for the sum of the first n natural numbers
function sumRangeFormula(num) {
  return (num * (num + 1)) / 2;
}

console.log(sumRangeFormula(6));
// Output: 21

// Edge cases:
console.log(sumRange(0));
// Output: 0
console.log(sumRange(1));
// Output: 1
