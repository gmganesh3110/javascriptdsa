// 1. Two Sum
var twoSum = function(nums, target) {
    let seen = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (seen[complement] !== undefined) {
            return [seen[complement], i];
        }

        seen[nums[i]] = i;
    }
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))