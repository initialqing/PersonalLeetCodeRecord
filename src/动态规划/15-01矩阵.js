/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
    const row = mat.length, col = mat[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // 周围有0就不变 有1就初始化大的数值
            if(mat[i][j]===1 && !((i > 0 && mat[i - 1][j] == 0) || (i < row - 1 && mat[i + 1][j] == 0) || (j > 0 && mat[i][j - 1] == 0) || (j < col - 1 && mat[i][j + 1] == 0))) {
                mat[i][j] = row + col
            }
        }
    }
    // 原数组中修改
    const dfs = (i, j, matrix) => {
        let dir = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1]
        ]
        for (const [x, y] of dir) {
            const dx = x + i
            const dy = y + j
            const judje = (dx >= 0 && dx < row) && (dy >= 0 && dy < col)
            if (judje && mat[dx][dy] > matrix[i][j] + 1) {
                matrix[dx][dy] = matrix[i][j] + 1
                dfs(dx, dy, matrix)
            }
        }
    }
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                dfs(i, j, mat)
            }
        }
    }
    return mat
};
