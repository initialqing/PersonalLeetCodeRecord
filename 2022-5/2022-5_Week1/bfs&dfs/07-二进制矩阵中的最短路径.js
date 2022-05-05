/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = function (grid) {
    let directions = [[-1, -1], [-1, 0], [0, 1], [1, 0], [1, 1], [-1, 1], [1, -1], [0, -1]]
    // 最短路径是1
    let length = grid.length, queue = [], res = 1
    let visited = new Array(length).fill(0).map(() => new Array(length).fill(0))
    // 一行一列的数组
    // 特殊情况处理
    if (length === 1) {
        return 1
    }
    if (grid[0][0] === 1) {
        return -1
    }
    // 放入初始起点
    queue.push([0, 0])
    while (queue.length) {
        // console.log(queue)
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let [i, j] = queue.shift()
            // console.log(i,j)
            for (const [x, y] of directions) {

                let x1 = x + i
                let y1 = y + j

                // 边界条件
                if (x1 < length && x1>=0  && visited[x1][y1] === 0 && y1 < length && y1 >= 0  && grid[x1][y1] === 0) {
                    if (x1 === length - 1 && y1 === length - 1) {
                        return res + 1
                    }
                    queue.push([x1,y1])
                    visited[x1][y1] = 1
                }
            }
        }
        res+=1
    }
    return -1
};