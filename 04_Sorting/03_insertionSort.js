// Insertion Sort Algorithm
// Write a function that takes an array and sorts it using the insertion sort technique.
// In this algorithm, each element is picked and inserted into its correct position
// in the already sorted portion of the array.


// Pseudocode:
// 1. Start from the second element (index 1).
// 2. Store the current element in a variable.
// 3. Compare it with the previous elements.
// 4. Shift all elements greater than the current element one position ahead.
// 5. Insert the current element in its correct position.
// 6. Repeat until the array is sorted.


function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    let j = i - 1;

    // Shift elements that are greater than currentVal
    while(j >= 0 && arr[j] > currentVal){
      arr[j + 1] = arr[j];
      j--;
    }

    // Place currentVal at the correct position
    arr[j + 1] = currentVal;
  }
  
  return arr;
}


// Test cases
console.log(insertionSort([1,3,6,3,2,1,6,7,54,3,6,1,4,75,3]));
// Output: [1, 1, 1, 2, 3, 3, 3, 3, 4, 6, 6, 6, 7, 54, 75]

console.log(insertionSort([5, 4, 3, 2, 1]));
// Output: [1, 2, 3, 4, 5]

console.log(insertionSort([1, 2, 3, 4, 5]));
// Output: [1, 2, 3, 4, 5]


// Time Complexity:
// O(n^2) in worst and average cases
// O(n) in best case (already sorted array)


// Space Complexity:
// O(1) - in-place sorting


// Edge Cases:
console.log(insertionSort([]));     // Output: []
console.log(insertionSort([10]));   // Output: [10]

// Notes:
// - Works with duplicate elements
// - Stable sorting algorithm (maintains order of equal elements)
// - Efficient for small or nearly sorted arrays