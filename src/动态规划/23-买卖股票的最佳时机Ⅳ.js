/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(k, prices) {
    let dp = new Array(prices.length).fill(0).map(() => new Array(2*k+1).fill(0))
    // 初始化dp数组
    for (let i = 0; i < 2*k+1; i++) {
        if(i % 2!==0) {
            dp[0][i] = -prices[0]
        }
    }
    for (let i = 1; i < prices.length; i++) {
        for (let j = 1; j <= 2 * k; j++) {
            if (j % 2 === 0) {
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-1]+prices[i])
                continue
            }
            dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-1]-prices[i])
        }
    }

    return dp[prices.length-1][2*k]
};
maxProfit(2,[1,2,3,4,5])
