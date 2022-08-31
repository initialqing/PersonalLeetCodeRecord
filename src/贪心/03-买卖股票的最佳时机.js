/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max  = 0
    // 贪心的做法，遇到后面比前面大的就加上去
    for(let i = 0;i<prices.length;i++) {
        if(i  && prices[i] - prices[i-1] > 0) {
            max += prices[i] - prices[i-1]
        }
    }
    return max
};
