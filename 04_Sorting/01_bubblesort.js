// Bubble Sort is a simple sorting algorithm that works by repeatedly stepping through the array,
// comparing adjacent elements, and swapping them if they are in the wrong order.
// This process is repeated until the array is fully sorted.
//
// The algorithm gets its name because smaller elements "bubble" to the top (beginning)
// of the array with each iteration.
//
// It maintains two parts:
// 1. The sorted portion (at the end of the array)
// 2. The unsorted portion (at the beginning)
//
// After each pass, the largest element from the unsorted portion is moved to its correct position.

function bubbleSort(arr){

  for(let i = arr.length; i > 0; i--){
    let noswap=true;
	for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j + 1]){
        // SWAP
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
		noswap=false;
      }
    }
	if(noswap) break;
  }
  return arr;
}

console.log(bubbleSort([37,45,28,7]));

// Output: [7, 28, 37, 45]


// Time Complexity:
// Worst Case: O(n^2) – when the array is reverse sorted
// Average Case: O(n^2)
// Best Case: O(n) – if optimized version is used with a "no swaps" check

// Space Complexity:
// O(1) – sorting is done in place, no extra memory needed


// The bubble sort algorithm is not efficient for large datasets,
// but it is very easy to understand and implement.
// It is commonly used for learning purposes.


// Edge Cases:
// 1. Empty Array:
//    Returns an empty array since there are no elements to sort.
//
// 2. Single Element:
//    Returns the same array because it's already sorted.
//
// 3. Duplicate Elements:
//    Handles duplicates correctly. However, basic bubble sort is stable,
//    meaning equal elements retain their original order.
//
// 4. Already Sorted Array:
//    Works correctly but still performs unnecessary comparisons.
//    (Can be optimized using a swap flag to stop early)
//
// 5. Reverse Sorted Array:
//    Worst-case scenario — maximum number of comparisons and swaps required.