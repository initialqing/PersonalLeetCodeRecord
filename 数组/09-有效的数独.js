let judge = (board) => {
    let rows = []
    let column = []
    let boards = []
    for (let i = 0; i < 9; i++) {
        rows[i] = new Map()
        column[i] = new Map()
        boards[i] = new Map()
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let char = board[i][j]
            let block = Math.floor(j/3) + Math.floor(i/3) * 3
            if (char==='.') continue
            if (rows[i].has(char)||column[j].has(char)||boards[block].has(char)) {
                return false
            }else {
                rows[i].set(char,1)
                column[j].set(char,1)
                boards[block].set(char,1)
            }
        }
    }
    return  true
}
let test_arr = [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]
let res = judge(test_arr);
console.log(res)