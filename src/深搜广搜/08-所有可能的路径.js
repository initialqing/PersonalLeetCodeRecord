/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let arr = [],res = []
    const dfs = (graph,x,n) => {
        if(x === n) {
            res.push(arr.slice())
            return
        }
        for(const y of graph[x]) {
            arr.push(y)
            dfs(graph,y,n)
            arr.pop()
        }
    }
    arr.push(0)
    dfs(graph,0,graph.length-1)
    return res
};
allPathsSourceTarget([[1,2],[3],[3],[]])
