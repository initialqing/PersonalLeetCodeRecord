
const change = function(amount, coins) {
    let dp = new Array(amount+1).fill(0)
    dp[0] = 1
    // 递推公式：dp[j] += dp[j-weight[i]]
    // 计算组合数的遍历顺序，先遍历物品在遍历背包
    // for(let i = 0;i<coins.length;i++) {
    //     for(let j = coins[i];j<=amount;j++) {
    //         dp[j] += dp[j-coins[i]]
    //     }
    //     console.log(dp)
    // }
    // 计算排列数的遍历顺序，先遍历背包再便利物品
    for (let j = 0; j <= amount; j++) { // 遍历背包容量
        for (let i = 0; i < coins.length; i++) { // 遍历物品
            if (j - coins[i] >= 0) dp[j] += dp[j - coins[i]];
        }
        console.log(dp)
    }
    return dp[amount]
};
