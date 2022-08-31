/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function (board) {
    const isValid = (row, col, val, board) => {
        // 同行同列是否重复
        for (let i = 0; i < board.length; i++) {
            if (board[i][col] === val || board[row][i] === val) {
                return false
            }
        }
        // 九宫格中的元素是否重复
        // 找到当前元素所在的九宫格的起始位置
        let startRow = Math.floor(row / 3) * 3
        let startCol = Math.floor(col / 3) * 3
        // 注意边界条件
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === val) {
                    return false
                }
            }
        }
        return true
    }
    const backtrack = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] !== '.') {
                    continue
                }
                for (let k = 1; k <= 9; k++) {
                    if (isValid(i, j, `${k}`, board)) {
                        board[i][j] = `${k}`
                        if (backtrack()) {
                            return true
                        }
                        board[i][j] = `.`
                    }
                }
                return false
            }
        }
        return true
    }
    backtrack()
};
