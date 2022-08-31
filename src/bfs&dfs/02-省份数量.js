/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
    const bfs = (i,isConnected,visit) => {
        visit[i] = 1
        for (let j = 0; j < isConnected[0].length; j++) {
            if (isConnected[i][j]===1 && visit[j]===0) {
                bfs(j,isConnected,visit)
            }
        }
    }
    let count = 0, visit = new Array(isConnected.length).fill(0)
    for (let i = 0; i < isConnected.length; i++) {
        if (!visit[i]) {
            count++
            bfs(i,isConnected,visit)
        }
    }
    return  count

};
