function addUptoN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(addUptoN(5)); // Output: 15

// I will initialize a variable `sum` to 0 and then iterate from 1 to n, adding each number to `sum`. Finally, I will return the value of `sum`.

// Time complexity: O(n) where n is the input number
// Space complexity: O(1) since we are using a constant amount of space

// Alternative solution using the formula n(n + 1) / 2
function addUptoN(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUptoN(5)); // Output: 15

// Time complexity: O(1) since we are using a constant number of operations
// Space complexity: O(1) since we are using a constant amount of space

// Edge cases:
console.log(addUptoN(0)); // Output: 0
console.log(addUptoN(1));
// Output: 1
console.log(addUptoN(10)); // Output: 55
console.log(addUptoN(-5)); // Output: 0 (since we are only summing positive integers up to n)
