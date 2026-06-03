// 283. Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zeroes.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let x = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let temp = nums[i];
            nums[i] = nums[x];
            nums[x] = temp;
            x++;
        }
    }
};

let arr = [0, 1, 0, 3, 12]
moveZeroes(arr);
console.log(arr)
var moveZeroes2 = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[x] = nums[i];
            x++;
        }
    }
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
}

let arr2 = [0, 1, 0, 3, 12]
moveZeroes2(arr2);
console.log(arr2)

let arr3 = [0, 0, 0, 0, 0]
moveZeroes2(arr3);
console.log(arr3)