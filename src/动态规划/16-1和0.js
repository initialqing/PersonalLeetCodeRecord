/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = function(strs, m, n) {
    // 重量：每个字符0与1的个数 价值：每个字符的价值是1
    let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0))
    let zNum,oNum
    for(const str of strs) {
        zNum = 0,oNum = 0
        for(const ele of str) {
            if(ele==='0') {
                oNum++
            }else {
                zNum++
            }
        }
        for(let i = m;i>=oNum;i--) {
            for(let j = n;j>=zNum;j--) {
                dp[i][j] = Math.max(dp[i][j],dp[i-oNum][j-zNum]+1)
            }
        }
    }
    return dp[m][n]
};
