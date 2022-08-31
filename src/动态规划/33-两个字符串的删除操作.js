/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function(word1, word2) {
    const [m,n] = [word1.length,word2.length]
    let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
    for(let i = 0;i<=m;i++) {
        dp[i][0] = i
    }
    for(let i = 0;i<=n;i++) {
        dp[0][i] = i
    }

    // console.log(dp,m,n)
    for(let i =1;i<=m;i++) {
        for(let j=1;j<=n;j++) {
            if(word1[i-1]===word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            }else {
                dp[i][j] = Math.min(dp[i-1][j]+1,dp[i][j-1]+1)
            }
        }
    }
    return dp[m][n]
};
