/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 和最长公共子序列的思路一样
const maxUncrossedLines = function(nums1, nums2) {
    let dp = new Array(nums1.length+1).fill(0).map(() => new Array(nums2.length+1).fill(0))
    for(let i = 1;i<=nums1.length;i++) {
        for(let j = 1;j<=nums2.length;j++) {
            if(nums1[i-1]===nums2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1
                continue
            }
            dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
        }
    }
    console.log(dp)
    return dp[nums1.length][nums2.length]
};
