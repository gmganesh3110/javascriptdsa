// Naive Search Algorithm
// Write a function that accepts two strings and checks if the shorter string is contained within the longer string. Return the count of the number of times that the shorter string appears in the longer string.

// Pseudocode:
// 1. Initialize a count variable to 0.
// 2. Loop through the longer string from the beginning to the end.
// 3. For each character in the longer string, check if the substring starting from that character matches the shorter string.
// 4. If it matches, increment the count variable.
// 5. Return the count variable after the loop is finished.

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("ganesh is the dev", "dev"));

// Output: 1

// Explanation: The shorter string "dev" appears once in the longer string "ganesh is the dev", so the function returns 1.

console.log(naiveSearch("hello world", "o"));
// Output: 2
// Explanation: The shorter string "o" appears twice in the longer string "hello world", so the function returns 2.

console.log(naiveSearch("aaaaa", "aa"));
// Output: 4
// Explanation: The shorter string "aa" appears four times in the longer string "aaaaa" (at indices 0, 1, 2, and 3), so the function returns 4.

// Time complexity: O(n * m) where n is the length of the longer string and m is the length of the shorter string, since we are checking each character in the longer string against each character in the shorter string.
// Space complexity: O(1) since we are using a constant amount of space to store the count variable and loop indices.
