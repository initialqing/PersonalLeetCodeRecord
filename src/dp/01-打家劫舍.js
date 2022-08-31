/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    // 1.确定dp数组
    // dp[i]表示考虑下标i以内的房屋，最多偷的金额是dp[i]
    // 2. 确定递归公式
    // 决定dp[i]的因素是第i个房屋偷或者不偷
    // 如果偷的话dp[i] = dp[i-2]+num[i] 不偷dp[i] = dp[i-1]
    // 所以取dp[i]的最大值dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);
    // 3.dp数组的初始化
    // 需要初始化dp[0] dp[1]dp[0]只能为nums[0] dp[1]为两个数的最大值
    let dp = []
    dp[0] = nums[0]
    dp[1] = nums[0]>nums[1]? nums[0]:nums[1]
    for(let i = 2;i<nums.length;i++) {

        dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
        console.log(dp)
    }
    return dp[nums.length-1]
};
