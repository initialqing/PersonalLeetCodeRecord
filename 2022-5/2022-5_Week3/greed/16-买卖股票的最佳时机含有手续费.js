/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let minPrice = Infinity,res = 0
    for(let i = 0;i<prices.length;i++) {
        // 买入股票，更新最小值
        if(prices[i]<minPrice) {
            minPrice = prices[i]
        }
        // 卖不出去，股票价格很低
        if(prices[i]>minPrice && prices[i]<=minPrice+fee) {
            continue
        }
        // 可以卖出股票
        if(prices[i]>minPrice+fee) {
            res+= prices[i]-minPrice-fee;
            // 相当于持有股票
            minPrice = prices[i] - fee
        }
    }
    return res
};