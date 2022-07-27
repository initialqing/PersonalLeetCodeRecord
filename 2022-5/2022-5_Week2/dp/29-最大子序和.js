/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    // let sum = 0,res = -Infinity
    // for(const ele of nums) {
    //     if(sum>0) {
    //         sum+=ele
    //     }else {
    //         sum = ele
    //     }


    //     res = Math.max(sum,res)
    // }
    // return res
    let dp = new Array(nums.length).fill(0)
    dp[0] = nums[0];let res = dp[0]
    for(let i = 1;i<nums.length;i++) {
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
        if(dp[i]>res) res = dp[i]
    }
    console.log(dp)
    return res
};
