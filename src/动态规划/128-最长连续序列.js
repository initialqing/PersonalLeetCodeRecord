/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if(!nums.length) return 0
    let dp = new Array(nums.length).fill(0)
    nums.sort((a,b) => a-b)
    nums = Array.from(new Set(nums))
    dp[0] = 1
    for(let i =1;i<=nums.length;i++) {
        if(nums[i] - nums[i-1] <= 1) {
            dp[i] = dp[i-1] + 1
        }else {
            dp[i] = 1
        }
    }
    return Math.max(...dp)
};