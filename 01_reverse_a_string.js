//  Write a function that takes a string as input and returns the string reversed.

function reverse(str) {
  if (!str) return;
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverse("ganesh"));

// Time complexity: O(n) where n is the length of the string
// Space complexity: O(n) where n is the length of the string (for the reversed string)

// Alternative solution using built-in methods
function reverse(str) {
  if (!str) return;
  return str.split("").reverse().join("");
}
console.log(reverse("ganesh"));

// Time complexity: O(n) where n is the length of the string
// Space complexity: O(n) where n is the length of the string (for the reversed string)
