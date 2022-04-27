/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = function (grid) {
    let n = grid.length
    //z方向的面积就是不为0的元素的个数，需要统计二维数组中不为0的元素个数
    let count = 0
    let yArea = 0
    let xArea = 0
    let temp = 0
    for (let i = 0; i < n; i++) {
        // 求y方向上数组的最大值并不断相加
        yArea += Math.max(...grid[i])
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            temp = Math.max(grid[j][i], temp)
            if (grid[i][j] !== 0) {
                count++
            }
        }
        xArea += temp
        temp = 0
    }
    return count + yArea + xArea
};