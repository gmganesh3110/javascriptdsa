// 27. Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[x]=nums[i]
            x+=1;
        }
    }
    console.log(nums,x)
    return x;
};
console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))