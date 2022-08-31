/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function(s) {
    // 初始化dp数组
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0))
    // 置dp数组对角线元素为1,因为对角线的元素最长回文子序列长度为1，当行大于列的时候最长会问子序列为1
    for(let i = 0;i<s.length;i++) {
        dp[i][i] = 1
    }
    // dp数组和字符串的长度是一样的没有扩大长度。
    // 根据递推公式确定遍历顺序
    for(let i = s.length-1;i>=0;i--) {
        for(let j = i+1;j<s.length;j++) {
            // 递推公式
            if(s[i]===s[j]) {
                // 相同就左下角的状态 +2
                dp[i][j] = dp[i+1][j-1] + 2
            }else {
                // 不相同取左边和下边最大的那一个
                dp[i][j] = Math.max(dp[i][j-1],dp[i+1][j])
            }
        }
    }
    return dp[0][s.length-1]
};
