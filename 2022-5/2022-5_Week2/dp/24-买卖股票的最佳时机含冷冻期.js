/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    /**
     * 动态规划的四个状态
     *  状态1：买入股票的状态：1、前一天就买入没有操作 dp[i][0] = dp[i-1][0] 2、今天才买入 : 1) 前一天是冷冻期 dp[i-1][3] - price[i] 2) 前一天保持卖出状态 dp[i-1][1] - price[i]
*                              综合取最大值:Math.max(dp[i-1][3],dp[i-1][1]) - price[i]
     *                         最终状态：dsp[i][0] = Math.max(dp[i-1][0],Math.max(dp[i-1][1],dp[i-1][3]) - prices[i])
     *      状态：卖出股票的状态
     *          状态2：两天前卖出了股票一直没操作，度过了冷冻期保持卖出股票的状态。
     *               操作1：前一天就是状态二  操作二：前一天是冷冻期
     *          状态3：今天卖出股票
     *               操作：昨天一定买入股票 也就是状态1  dp[i-1][0] + price[i]
     *  状态4：冷冻期的状态
     *               操作：昨天一定卖出了股票也就是状态3 dp[i][2] = dp[i-1][2]
     */
    let dp = new Array(prices.length).fill(0).map(() => new Array(4).fill(0))
    // 初始化dp数组
    // 状态1 持有股票状态dp[i-1][0] = -price[0]
    dp[0][0] = -prices[0]
    // 状态2：卖出股票状态
    dp[0][1] = 0
    // 今天卖出股票
    dp[0][2] = 0
    // 冷冻期状态
    dp[0][3] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i-1][0],Math.max(dp[i-1][1],dp[i-1][3] - prices[i]))
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][3])
        dp[i][2] = dp[i-1][0]+ prices[i]
        dp[i][3] = dp[i-1][2]
    }
    const len = prices.length
    return Math.max(dp[len-1][1],dp[len-1][2],dp[len-1][3])
};
