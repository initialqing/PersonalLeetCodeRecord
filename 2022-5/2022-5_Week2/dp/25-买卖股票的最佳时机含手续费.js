/**
 *
 * 贪心解法！！
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfitGreed = function(prices, fee) {
    let min = -Infinity,res = 0
    for (let i = 0; i < prices.length; i++) {
        if (min>=prices[i]) {
            min = prices[i]
        }else if (prices[i]>min && min+fee>prices[i]) {
            continue
        }else if (prices[i]-min>fee) {
            res += prices[i] - min - fee
            min = prices[i] - fee
        }

    }
    return  res
};
/**
 * dp[i][0] dp[i][1]
 * dp[i][0] 表示第i天持有股票所得的最大现金
 *          可由两个状态推过来 :1) 第i-1天就持有股票 2) 第i天买入股票
 * dp[i][1] 表示第i天不持有股票所得的最大现金
 *           由两个状态推导过来：1) 第i-1天就不持有股票 2) 第i天卖出股票
 * dp推导公式 dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] - prices[i])
 *           dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] + prices[i] - fee)
 * 初始化dp
 * dp[0][0] = -prices[0] dp[0][1] = 0
 * @param {number[]} prices
 * @param {number}fee
 */
const maxProfitDp = function(prices, fee) {
    let dp = new Array(prices.length).fill(0).map( () => new Array(2).fill(0))
    dp[0][0] = -prices[0],dp[0][1] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] - prices[i])
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] + prices[i] - fee)
    }
    return dp[prices.length-1][1]
};
