/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // 1、 求和/2
    // 2、初始化dp数组
    // 3 、递推公式
    let sum = 0
    nums.forEach(item => {
        sum+=item
    })
    let bags  = sum / 2
    if(Math.floor(bags)!==bags) {
        return false
    }
    let dp = new Array(nums.length).fill(0).map(() => new Array(bags+1).fill(0))
    for(let i = 0;i<dp[0].length;i++) {
        let num = Math.floor(i/nums[0])
        if(num>=1) {
            dp[0][i] =  nums[0]
        }
    }
    for(let j = 0;j<nums.length;j++) {
        dp[j][0] = 0
    }
    for(let i = 1;i<nums.length;i++) {
        for(let j = 0;j<=bags;j++) {
            if(j<nums[i]) {
                dp[i][j] = dp[i-1][j]
            }else {
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-nums[i]]+nums[i])
            }
        }
    }
    return dp[nums.length-1][bags] === bags
};
