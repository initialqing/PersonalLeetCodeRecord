/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    if(!s || !p) return false

    const sLen = s.length
    const pLen = p.length
    // dp[i][j]表示s前i个字符用p前j个字符匹配的结果
    const dp = new Array(sLen+1).fill(0).map(_ => new Array(pLen+1).fill(false))
    //初始化 dp[0][0] = true
    dp[0][0] = true
    for(let j = 1;j<p.length;j++) {
        if(p[j-1] === '*') {
            dp[0][j] = dp[0][j-2]
        }
    }
    for(let i = 1;i<=sLen;i++) {
        for(let j = 1;j<=pLen;j++) {
            if(s[i-1] === p[j-1] || p[j-1] ==='.') {
                dp[i][j] = dp[i-1][j-1]
            }else if(p[j-1] === '*') {
                if(s[i-1] === p[j-2] || p[j-2] ==='.') {
                    dp[i][j] = dp[i][j-2] || dp[i][j-1] || dp[i-1][j]
                }else {
                    dp[i][j] = dp[i][j-2]
                }
            }
        }          
    }
    return dp[sLen][pLen]
};