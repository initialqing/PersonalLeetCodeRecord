/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let sum = 0,sumMax = nums[0]
    for(const ele of nums) {
        if(sum>0) {
            sum+=ele
        }else {
            sum = ele
        }
        sumMax = Math.max(sumMax,sum)
    }
    return sumMax
};
// 另一种写法
const maxSubArray = function(nums) {
    let count = 0,res = -Infinity
    for (let i = 0; i < nums.length; i++) {
        count+=nums[i]
        if (count>res) {
            res = count
        }
        if (count<=0) count = 0
    }
    return res
};
