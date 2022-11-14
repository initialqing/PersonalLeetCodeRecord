/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.cn/problems/maximum-product-subarray/solution/cheng-ji-zui-da-zi-shu-zu-tu-jie-dpzui-q-jjzv/
 var maxProduct = function (nums) {
    let dp = new Array(2).fill(0)

    dp[0] = nums[0]
    dp[1] = nums[0]
    
    let max = nums[0],min = nums[0]
    let res = nums[0]

    for (let i = 1; i < nums.length; i++) {
        min = dp[0]
        max = dp[1]
        // dp[0] 维护以nums[i]结尾的最小值，dp[1]维护以nums[i]结尾的最大值
        dp[0] = Math.min(nums[i],Math.min(nums[i] * min,nums[i] * max))
        dp[1] = Math.max(nums[i],Math.max(nums[i] * min,nums[i] * max))

        res = Math.max(res,dp[1])
    }

    return res
};