// 题解文章
// https://blog.csdn.net/qq_43164662/article/details/121706669
// 枚举不同骰子和的组合的个数，除以总组合数计算概率
// 动态规划：i个骰子点数总和为j的组合数等于 i-1个骰子，点数总和为 s-1 s-2 s-3 ... s-6的点数总和
function dicesProbability(n: number): number[] {
    let res = new Array(5 * n + 1).fill(0)
    let total = Math.pow(6, n)
    let dp = new Array(n + 1).fill(0).map(_ => new Array(6 * n + 1).fill(0))
    dp[1][1] = dp[1][2] = dp[1][3] = dp[1][4] = dp[1][5] = dp[1][6] = 1

    for (let i = 1; i <= n; i++) {
        for (let j = 6 * i; j >= i; j--) {
            for (let k = 1; k <= 6; k++) {
                dp[i][j] += j - k >= i - 1 ? dp[i - 1][j - k] : 0
            }
            if (i == n) {
                res[j - n] = dp[i][j] / total
            }
        }
    }
    return res
};