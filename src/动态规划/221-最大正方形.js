/**
 * @param {character[][]} matrix
 * @return {number}
 */

// https://leetcode.cn/problems/maximal-square/solution/zui-da-by-uniquelee-gn25/
 var maximalSquare = function (matrix) {
    // dp[i][j]的定义：以i,j为结尾的元素的最大正方形边长
    const row = matrix.length, cols = matrix[0].length
    const dp = new Array(row).fill(0).map(_ => new Array(cols).fill(0))
    let maxSide = 0
    console.log(dp)
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                }
                maxSide = Math.max(maxSide, dp[i][j])
            }
        }
    }
    return maxSide * maxSide
};

