/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let res = 0
    let maxPos = 0
    let end = 0
    for(let i = 0;i<nums.length-1;i++) {
        maxPos = Math.max(maxPos,nums[i]+i)
        if(i===end) {
            res++
            end = maxPos        }
    }
    return res
};
jump([1,2,3,4,5])
