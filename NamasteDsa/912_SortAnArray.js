// 912. Sort an Array
// Given an array of integers nums, sort the array in ascending order and return it.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length <= 1) return nums;
    let middle = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, middle))
    let right = sortArray(nums.slice(middle));
    return helper(left, right)
};
var helper = function (nums1, nums2) {
    let p1 = 0;
    let p2 = 0;
    let result = [];
    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] < nums2[p2]) {
            result.push(nums1[p1]);
            p1++
        }
        else {
            result.push(nums2[p2]);
            p2++
        }
    }
    while (p1 < nums1.length) {
        result.push(nums1[p1]);
        p1++
    }
    while (p2 < nums2.length) {
        result.push(nums2[p2]);
        p2++
    }
    return result;
}

// Test cases
console.log(sortArray([5, 2, 3, 1]));
// Output: [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0]));
// Output: [0, 0, 1, 1, 2, 5]

// Time Complexity:
// O(n log n) in all cases (best, average, worst)
// Space Complexity:
// O(n) - due to the additional space used for merging arrays