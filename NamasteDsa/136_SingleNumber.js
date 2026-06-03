// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1
        }
        else {
            obj[nums[i]]++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === 1) {
            return nums[i]
        }

    }
};

let arr = [4, 1, 2, 1, 2]
console.log(singleNumber(arr))

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber1 = function (nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor
};

let arr1 = [4, 1, 2, 1, 2]
console.log(singleNumber1(arr1))