/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let dir = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ]
    const dfs = (board,x,y,visited,cengshu) => {
        if(word[cengshu]!==board[x][y]) {
            return
        }
        // console.log(x,y)
        if(cengshu===word.length-1) {
            return true
        }
        visited[x][y] = 1
        for(const [i,j] of dir) {
            let x1 = x+i
            let y1 = y+j
            if(x1 >= 0 && y1 >=0 && x1 < board.length && y1< board[0].length &&!visited[x1][y1]) {

                let flag = dfs(board,x1,y1,visited,cengshu+1)
                if(flag) {
                    return true
                }
            }
        }
        // 回溯阶段，访问过的变回0，就差一点点想到
        visited[x][y] = 0
        return false
    }
    let visited = new Array(board.length).fill(0).map( () => new Array(board[0].length).fill(0))
    for(let i = 0;i<board.length;i++) {
        for(let j=0;j<board[0].length;j++) {
            if(word[0]===board[i][j]) {
                let res = dfs(board,i,j,visited,0)
                if(res) return true
            }
        }
    }
    return false
};
/**
 * dfs的另一种写法
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const rows = board.length,
        cols = board[0].length;
    const dfs = (i, j, k) => {
        if (i < 0 || j < 0 || i >= rows || j >= cols || board[i][j] != word[k])
            return false;
        if (k == word.length - 1) return true;
        // 当前层访问过这个点给个点随便赋值
        board[i][j] = "\0";
        let res =
            dfs(i + 1, j, k + 1) ||
            dfs(i - 1, j, k + 1) ||
            dfs(i, j + 1, k + 1) ||
            dfs(i, j - 1, k + 1);
        // 为什么这里就直接word[k]了呢  因为如果board[i][j]如果不等于word[k]的话，在一开始就直接返回了
        // 回溯节点、恢复这个点
        board[i][j] = word[k];
        // 四个方向都试  只有任一一个方向是true就返回的true
        return res;
    };
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == word[0]) {
                // 从矩阵的任一一个元素点开始向四周扩散查找  找到了就可以立即返回了
                if (dfs(i, j, 0)) return true;
            }
        }
    }
    return false;
};
