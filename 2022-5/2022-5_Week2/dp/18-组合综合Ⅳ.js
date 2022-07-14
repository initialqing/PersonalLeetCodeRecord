/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function(nums, target) {
    let dp = new Array(target+1).fill(0)
    dp[0] = 1
    // 此时的dp表示为i，题目要求求的是排列数
    for(let i = 0;i<=target;i++) { // 先遍历背包
        for(let j = 0;j<=nums.length-1;j++) { // 后遍历物品
            if(i>=nums[j]) {
                dp[i] += dp[i-nums[j]]
            }
        }
        console.log(dp)
    }
    return dp[target]
};
