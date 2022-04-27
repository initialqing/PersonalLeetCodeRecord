/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function(heights) {
    let pacificQueue = []
    let atlanticQueue = []
    // 得到行数列数创建后边的数组
    let row = heights.length,col = heights[0].length
    // 创建移动坐标
    let directions = [
        [0,1],
        [0,-1],
        [1,0],
        [-1,0]
    ]
    // 存放访问过太平洋坐标
    let pacificVisited = new Array(row)
        .fill(false)
        .map( () => new Array(col).fill(false))
    let atlanticVisited = new Array(row)
        .fill(false)
        .map(() => new Array(col).fill(false))
    for(let i = 0;i<row;i++) {
        // 最左边的一列，需要遍历行
        pacificQueue.push([i,0])
        pacificVisited[i][0] = true;
        // 最右边一列
        atlanticQueue.push([i,col-1])
        atlanticVisited[i][col - 1] = true;
    }
    for(let i = 0;i<col;i++) {
        // 最上边一行
        pacificQueue.push([0,i])
        pacificVisited[0][i] = true
        // 最下边一行
        atlanticQueue.push([row-1,i])
        atlanticVisited[row-1][i] = true

    }
    // // bfs
    // while(pacificQueue.length) {
    //     let [x,y] = pacificQueue.shift()
    //     for(const dir of directions) {
    //         let curx = x + dir[0]
    //         let cury = y + dir[1]
    //         if(
    //             curx>=0
    //             && cury>=0
    //             && curx < row
    //             && cury < col
    //             && !pacificVisited[curx][cury]
    //             && heights[curx][cury] >= heights[x][y]
    //
    //         ){
    //             pacificQueue.push([curx,cury])
    //             pacificVisited[curx][cury] = true
    //         }
    //     }
    // }
    // while(atlanticQueue.length) {
    //     let [x,y] = atlanticQueue.shift()
    //     for(const dir of directions) {
    //         let curx = x + dir[0]
    //         let cury = y + dir[1]
    //         if(
    //             curx>=0
    //             && cury>=0
    //             && curx < row
    //             && cury < col
    //             && !atlanticVisited[curx][cury]
    //             && heights[curx][cury] >= heights[x][y]
    //
    //         ){
    //             atlanticQueue.push([curx,cury])
    //             atlanticVisited[curx][cury] = true
    //         }
    //     }
    // }
    /**
     * 封装的bfs
     * @type {*[]}
     */
    const bfs = (queue,visitArray) => {
        while(queue.length) {
        let [x,y] = queue.shift()
        for(const dir of directions) {
            let curx = x + dir[0]
            let cury = y + dir[1]
            if(
                curx>=0
                && cury>=0
                && curx < row
                && cury < col
                && !visitArray[curx][cury]
                && heights[curx][cury] >= heights[x][y]
            ){
                queue.push([curx,cury])
                visitArray[curx][cury] = true
            }
        }
    }
    return visitArray
    }
    pacificVisited = bfs(pacificQueue,pacificVisited)
    atlanticVisited = bfs(atlanticQueue,atlanticVisited)
    let res = []
    for(let i = 0;i<row;i++){
        for(let j=0;j<col;j++) {
            if(pacificVisited[i][j] && atlanticVisited[i][j]) res.push([i,j])
        }
    }
    return res
};