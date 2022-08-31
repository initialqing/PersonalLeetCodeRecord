/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let dp = new Array(prices.length).fill(0).map(()=>new Array(5).fill(0))
    dp[0][1] = -prices[0],dp[0][3] = -prices[0]
    for(let i = 1;i<prices.length;i++) {
        // 递推公式的四个状态
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
        dp[i][2] = Math.max(dp[i-1][2],dp[i-1][1]+prices[i])
        dp[i][3] = Math.max(dp[i-1][3],dp[i-1][2]-prices[i])
        dp[i][4] = Math.max(dp[i-1][4],dp[i-1][3]+prices[i])
    }
    return dp[prices.length-1][4]
};
