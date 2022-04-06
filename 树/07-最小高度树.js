/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// 最小高度树 是指最长的边的数量
const findMinHeightTrees = function(n, edges) {
    const g = new Array(4).fill(0).map(() => [])
    // 解构赋值？
    // for (const [u,v] of edges) {
    //     console.log('u:'+u)
    //
    //     console.log('v:'+v)
    // }
    console.log(g)
};
console.log(findMinHeightTrees(4,[[1,0],[1,2],[1,3]]))
