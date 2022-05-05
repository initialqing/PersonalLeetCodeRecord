/**
 * {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let visit = [],row = board.length,column = board[0].length,biaoji = []
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]
    let visited = new Array(row).fill(0).map( () => new Array(column).fill(0))
    for(let i = 0;i<column;i++) {
        if(board[0][i]==='O') {
            visit.push([0,i])
        }
        if(board[row-1][i]==='O') {
            visit.push([row-1,i])
        }

    }

    for(let i = 1;i<row-1;i++) {
        for(let j = 0;j<column;j++) {
            if(j===0&&board[i][j]==='O'){
                visit.push([i,j])
            }
            if(j===column-1&&board[i][j]==='O') {
                visit.push([i,j])
            }
        }
    }
    while(visit.length) {
        console.log(visit)
        let length = visit.length
        // for(let i = 0;i<length;i++) {
        let [x,y] = visit.shift()
        visited[x][y] = 1
        for(const [i,j] of directions) {
            let x1 = x + i
            let y1 = y + j
            if(x1 >=0 && x1<row && y1 >= 0 && y1 < column && board[x1][y1] === 'O' && visited[x1][y1]!==1) {
                visited[x1][y1] = 1
                visit.push([x1,y1])

            }
        }
        // }
    }
    for(let i = 0;i<row;i++) {
        for(let j = 0;j<column;j++) {
            if(visited[i][j]!==1 && board[i][j]==='O') {
                board[i][j] = 'X'
            }
        }
    }
    return board
};
