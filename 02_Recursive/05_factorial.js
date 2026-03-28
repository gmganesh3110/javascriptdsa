// Write a recursive function called factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. Factorials are often represented with the shorthand notation n!

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4));
// Output: 24
// Explanation: The function `factorial` takes a number `num` as input. If `num` is 1, it returns 1. Otherwise, it returns the product of `num` and the result of calling `factorial` with `num - 1`. This effectively multiplies all numbers from `num` down to 1, resulting in the factorial of `num`.

// Time complexity: O(n) where n is the input number `num`
// Space complexity: O(n) due to the recursive call stack.

// Alternative solution using an iterative approach
function factorialIterative(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorialIterative(4));

// Edge cases:
console.log(factorial(0));

// Output: 1
// Explanation: By definition, the factorial of 0 is 1. However, the current implementation does not handle this case. To fix this, we can add a condition to return 1 when `num` is 0.
