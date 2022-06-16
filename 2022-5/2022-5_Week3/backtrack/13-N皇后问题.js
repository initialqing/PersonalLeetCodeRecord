
const isValid = (row,col,chessboard,n) => {
    // 检查同列是否含有Q
    for(let i = 0;i<n;i++) {
        if(chessboard[i][col]==='Q') {
            return false
        }
    }
    // 检查斜向的方向是否含有'Q'
    for(let j = col-1,i = row-1;i>=0 && j>=0; j--,i--)   {
        if(chessboard[i][j]==='Q') {
            return false
        }
    }
    for(let i = row-1,j = col + 1;i>=0 &&j>=0;j++,i--) {
        if(chessboard[i][j]==='Q') {
            return false
        }
    }
    return true
}
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function(n) {
    if(n===1) return [['Q']]
    if(n<=3) {
        return []
    }
    let res = [],chessboard = new Array(n).fill('.'.repeat(n))
    const rebaseStr1 = (str,index) => {
        let arr = str.split('')
        arr[index] = 'Q'
        return arr.join('')
    }
    const rebaseStr2 = (str,index) => {
        let arr = str.split('')
        arr[index] = '.'
        return arr.join('')
    }
    const helper = (row,chess) => {
        if(row===n) {
            res.push([...chess])
            return
        }
        for(let i = 0;i<n;i++) {
            if(isValid(row,i,chess,n)) {
                // chess[row][i] = 'Q'
                // let str =
                chess[row] = rebaseStr1(chess[row],i)
                helper(row+1,chess)
                chess[row] = rebaseStr2(chess[row],i)
            }
        }
    }
    helper(0,chessboard)
    return res
};
/*
        另一个版本
 */
var solveNQueens = function(n) {
    function isValid(row, col, chessBoard, n) {

        for(let i = 0; i < row; i++) {
            if(chessBoard[i][col] === 'Q') {
                return false
            }
        }

        for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if(chessBoard[i][j] === 'Q') {
                return false
            }
        }

        for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if(chessBoard[i][j] === 'Q') {
                return false
            }
        }
        return true
    }

    function transformChessBoard(chessBoard) {
        let chessBoardBack = []
        chessBoard.forEach(row => {
            let rowStr = ''
            row.forEach(value => {
                rowStr += value
            })
            chessBoardBack.push(rowStr)
        })

        return chessBoardBack
    }

    let result = []
    function backtracing(row,chessBoard) {
        if(row === n) {
            result.push(transformChessBoard(chessBoard))
            return
        }
        for(let col = 0; col < n; col++) {
            if(isValid(row, col, chessBoard, n)) {
                chessBoard[row][col] = 'Q'
                backtracing(row + 1,chessBoard)
                chessBoard[row][col] = '.'
            }
        }
    }
    let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'))
    console.log(chessBoard)
    backtracing(0,chessBoard)
    return result
};
