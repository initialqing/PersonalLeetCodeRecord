/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const row = grid.length
    const culom = grid[0].length
    const dfs = (grid,left,right) =>{
        // 边界条件
        if(left<0 || right<0||left>=row||right>=culom || grid[left][right]==='0'||grid[left][right]==='2') return;
        grid[left][right] = '2'
        dfs(grid,left+1,right)
        dfs(grid,left,right-1)
        dfs(grid,left-1,right)
        dfs(grid,left,right+1)
    }
    let count = 0
    for(let i = 0;i<row;i++) {
        for(let j = 0;j<culom;j++) {
            // 假如遇到陆地就去撞南墙
            if(grid[i][j]==='1') {
                dfs(grid,i,j)
                count++
            }
        }
    }
    return count
};
var numIslands = function(grid) {
    let res = 0,queue = [],
    directions = [[0,1],[0,-1],[1,0],[-1,0]]
    for(let i = 0;i<grid.length;i++) {
        for(let j = 0;j<grid[0].length;j++) {
            if(grid[i][j] === '1') {
                res++
                queue.push([i,j])
                while(queue.length) {
                    let [x,y] = queue.shift()
                    for(const [x1,y1] of directions) {
                        let x2 = x+x1,y2 = y+y1
                        if(x2>=0&&x2<grid.length&&y2>=0&&y2<grid[0].length&&grid[x2][y2]==='1') {
                            queue.push([x2,y2])
                            grid[x2][y2] = '0'
                        }
                    }
                }
            }
        }
    }
};