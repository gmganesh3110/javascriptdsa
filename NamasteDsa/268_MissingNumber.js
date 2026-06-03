// 268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let totalwithMissing=0;
    for(let i=0;i<nums.length;i++){
        totalwithMissing+=nums[i]
    }
    let len=nums.length
    let total=(len*(len+1))/2
    let missingNumber=total-totalwithMissing;
    return missingNumber;
};

let arr=[3,0,1]
console.log(missingNumber(arr))

