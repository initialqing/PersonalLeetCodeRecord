/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function(word1, word2) {
    // 初始化dp数组长度
    const [m,n] = [word1.length,word2.length]
    let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
    // 初始化dp的数据
    for(let i = 0;i <= m;i++) {
        dp[i][0] = i
    }
    for(let j = 0;j <= n;j++) {
        dp[0][j] = j
    }

    for(let i = 1;i<=m;i++) {
        for(let j = 1;j<=n;j++) {
            // dp的递推公式,遇到元素相等以及不相等的两种情况。
            if(word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            }else {
                dp[i][j] = Math.min(dp[i-1][j-1],dp[i][j-1],dp[i-1][j]) + 1
            }
        }
    }
    return dp[m][n]
};
