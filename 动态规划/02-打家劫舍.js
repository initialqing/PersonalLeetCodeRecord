// const dajie  = (nums) => {
//     const max  = (nums,index) => {
//         if (nums===null || index<0) return 0
//         if (index===0) return nums[0]
//         return Math.max(max(nums,index-1),max(nums,index-2)+nums[index])
//     }
//     return max(nums,nums.length-1)
// }
// let nums = [1,4,3,1,5,3]
// console.log(dajie(nums))
/**动态规划
 * @param {number[]} nums
 * @return {number}
 */
let rob = function(nums) {
    if (nums.length===0) return 0
    // let maxVal = 0
    let dp = []
    dp[0] = 0
    dp[1] = nums[0]
    for(let i = 2;i<nums.length;i++) {
        dp[i] = Math.max(nums[i-1]+dp[i-2],dp[i-1])
    }
    return dp[nums.length]
};
/**
 * 动态规划的另一个版本
 */
let robber = (nums) => {
    let dp = [0]
    for(let i=0;i<nums.length;i++) {
        dp[i+1] = Math.max(dp[i],nums[i]+(dp[i-1] ?? 0))
    }
    return dp[nums.length]
}
