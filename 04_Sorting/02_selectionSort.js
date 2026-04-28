// Selection Sort is a simple sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the array and swapping it with the first unsorted element. The algorithm maintains two subarrays: the sorted subarray and the unsorted subarray. Initially, the sorted subarray is empty, and the unsorted subarray contains all the elements. The algorithm iteratively selects the smallest element from the unsorted subarray and moves it to the end of the sorted subarray until all elements are sorted.

// Time Complexity: O(n^2) - The algorithm has a nested loop structure, where the outer loop runs n times and the inner loop also runs n times in the worst case.
// Space Complexity: O(1) - The algorithm sorts the array in place, so it does not require additional space for another array.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i != lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([43, 23, 35, 76, 767, 84, 23, 65, 75, 43, 65]));

// Output: [ 23, 23, 35, 43, 43, 65, 65, 75, 76, 84, 767 ]

// The selection sort algorithm is not the most efficient sorting algorithm for large datasets, but it is easy to understand and implement. It is often used as an educational tool to introduce the concept of sorting algorithms.

// Edge Cases:
// 1. Empty Array: If the input array is empty, the function should return an empty array.
// 2. Single Element: If the input array contains only one element, the function should return that element as it is already sorted.
// 3. Duplicate Elements: The algorithm should handle duplicate elements correctly and maintain their relative order in the sorted output.
// 4. Already Sorted Array: If the input array is already sorted, the algorithm should still work correctly and return the sorted array without making unnecessary swaps.
// 5. Reverse Sorted Array: If the input array is sorted in reverse order, the algorithm should still sort it correctly, although it will require the maximum number of comparisons and swaps.
