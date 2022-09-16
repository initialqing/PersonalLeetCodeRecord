/**
 * 
 * @param {number} n
 * @returns {number} 
 */
function totalNQueens(n: number): number {
    const chessBoard: string[][] = new Array(n).fill([]).map(_ => new Array(n).fill('.'))
    let count = 0
    const isValid = (row: number, col: number, chess: string[][], n: number): boolean => {
        // 检查同一个列是否合法
        for (let i = 0; i < row; i++) {
            if (chess[i][col] === 'Q') {
                return false
            }
        }

        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (chess[row][col] === 'Q') {
                return false
            }
        }

        for (let i = row - 1, j = col + 1; i >= 0 && j >= 0; i--, j++) {
            if (chess[row][col] === 'Q') {
                return false
            }
        }
        return true
    }
    const backTracking = (row: number, chess: string[][]) => {
        if (row === n) {
            count++
            return
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col, chess, n)) {
                chess[row][col] = 'Q'
                backTracking(row + 1, chess)
                chess[row][col] = '.'
            }
        }

    }
    backTracking(0, chessBoard)
    return count
};
