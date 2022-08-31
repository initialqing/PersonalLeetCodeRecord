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
