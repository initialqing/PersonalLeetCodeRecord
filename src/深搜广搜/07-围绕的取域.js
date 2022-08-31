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
/**
 * @param
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let visit = [], row = board.length, column = board[0].length, biaoji = []
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let visited = new Array(row).fill(0).map(() => new Array(column).fill(0))
    let queue = []
    const bfs = (i, j) => {
        queue.push([i, j])
        while (queue.length) {
            let length = queue.length
            for (let i = 0; i < length; i++) {
                let [x, y] = queue.shift()
                for (const [i, j] of directions) {
                    let x1 = x + i
                    let y1 = y + j
                    if (x1 >= 0 && x1 < row && y1 >= 0 && y1 < column && board[x1][y1] === 'O' && visited[x1][y1] !== 1) {
                        console.log(x1, y1)

                        visited[x1][y1] = 1
                        queue.push([x1, y1])
                    }
                }

            }
        }

    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (i === 0 && board[i][j] === 'O') {
                visited[i][j] = 1
                bfs(i, j)
            }
            if (i === row - 1 && board[i][j] === 'O') {
                console.log(i, j)

                visited[i][j] = 1
                bfs(i, j)
            }
            if (j === 0 && board[i][j] === 'O') {
                visited[i][j] = 1
                bfs(i, j)
            }
            if (j === column - 1 && board[i][j] === 'O') {
                visited[i][j] = 1
                bfs(i, j)
            }
        }
    }


    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (visited[i][j] !== 1 && board[i][j] === 'O') {
                board[i][j] = 'X'
            }
        }
    }
    return board
};
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve1 = function(board) {
    const dir = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ]
    const m = board.length,n = board[0].length
    let visit = new Array(m).fill(0).map( () => new Array(n).fill(0))
    const dfs = (board,x,y) => {
        if(visit[x][y]) return
        visit[x][y] = 1
        for(const [i,j] of dir) {
            let x1 = x + i
            let y1 = y + j
            if(x1 < 0 || y1 < 0 || x1 >= m || y1 >= n ) {
                continue
            }
            if(board[x1][y1]==='O' && visit[x1][y1]===0) {
                visit[x1][y1] = 1
                dfs(board,x1,y1)
            }
        }
    }
    for(let i = 0;i<board.length;++i) {
        if(board[i][0] === 'O') {
            dfs(board,i,0)
        }
        if(board[i][n-1]==='O') {
            dfs(board,i,n-1)
        }
    }
    for(let j = 0;j<board[0].length;++j) {
        if(board[0][j] === 'O') {
            dfs(board,0,j)
        }
        if(board[m-1][j]==='O') {
            dfs(board,m-1,j)
        }
    }
    console.log(visit)
    for(let i = 0;i<m;++i) {
        for(let j = 0;j<n;++j) {
            if(board[i][j]==='O' && !visit[i][j]) {
                board[i][j] = 'X'
            }
        }
    }
    return board
};
solve1([["O","O","O"],["O","O","O"],["O","O","O"]])
