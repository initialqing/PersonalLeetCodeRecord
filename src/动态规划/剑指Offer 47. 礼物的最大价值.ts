/**
 * 与题目不同路径的思路一样，只是需要计算价值
 * @param grid 
 * @returns 
 */
function maxValue(grid: number[][]): number {
    const dp = new Array(grid.length).fill(0).map(_ => new Array(grid[0].length).fill(0))
    dp[0][0] = grid[0][0]
    for(let i = 1;i<grid.length;i++) {
        dp[i][0] = grid[i][0] + dp[i-1][0]
    }
    for(let i = 1;i<grid[0].length;i++) {
        dp[0][i] = grid[0][i] + dp[0][i-1]
    }
    for(let i = 1;i<grid.length;i++) {
        for(let j = 1;j<grid[0].length;j++) {
            dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]) + grid[i][j]
        }
    }

    return dp[grid.length-1][grid[0].length-1]
};