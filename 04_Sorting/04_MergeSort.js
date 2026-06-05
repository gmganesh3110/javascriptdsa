// Merge Sort
// Write a function that takes an array and sorts it using the merge sort technique.
// In this algorithm, the array is recursively divided into halves until we reach arrays of length 1 or 0 (which are inherently sorted).
// Then, these smaller arrays are merged back together in a sorted manner to produce the final sorted array.
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

function merge(arr1, arr2) {
    let result = [];
    let p1 = 0;
    let p2 = 0;

    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] <= arr2[p2]) {
            result.push(arr1[p1]);
            p1++
        }
        else {
            result.push(arr2[p2]);
            p2++
        }
    }
    while (p1 < arr1.length) {
        result.push(arr1[p1]);
        p1++
    }
    while (p2 < arr2.length) {
        result.push(arr2[p2]);
        p2++
    }
    return result
}

console.log(mergeSort([6, 1, 4, 6, 6, 8, 4, 6, 8, 2]))

// Time Complexity:
// O(n log n) in all cases (best, average, worst)
// Space Complexity:
// O(n) - due to the additional space used for merging arrays