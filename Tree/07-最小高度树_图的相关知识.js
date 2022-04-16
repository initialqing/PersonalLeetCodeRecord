/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function(n, edges) {
    //用来存放结果
    let res = []
    //用来存放每个节点的度，一定要初始化否则无法使用后面插入的代码
    let degree = new Array(n).fill(0)
    // 如果只有一个节点直接返回这个节点
    if (n===1) {
        res.push(0)
        return res
    }
    //初始化二维数组索引用来代标节点n个 索引对应的值为与之连接的节点
    let arr = new Array(n).fill(0).map(() => [])
    let m = new Map()
    for (const [a,b] of edges) {
        // 不初始化无法使用这些代码
        degree[a]++
        degree[b]++
        arr[a].push(b)
        arr[b].push(a)
    }
    // 第一个实例degree的值为[1,3,1,1] 0节点度1  1节点度3 依此类推，度的概念可以百度，图论相关概念
    for (let i = 0; i < arr.length; i++) {
        // 键为节点  值为连接的节点
        m.set(i,arr[i])
    }
    // 存放度为1的节点
    let queue = []
    for (let i = 0; i < arr.length; i++) {
        //第i个节点的度为1
        if (arr[i].length===1) {
            queue.push(i)
        }
    }

    while (queue.length>0) {
        // 每次删除一度点后清空，最后存放的是res 为什么自己理解下吧  我麻了
        res.splice(0)
        let length = queue.length
        // 分别处理每个度为1的点
        for (let i = 0;i<length;i++){
            //得到队列中度为1的点
            let leaf = queue.shift()
            res.push(leaf)
            // console.log(res)
            let neighbors = m.get(leaf)// 叶子节点的邻居
            for (const neighbor of neighbors) {
                // 叶子节点的邻居度-1 相当对干掉了一个度为1 的节点
                degree[neighbor]--
                // 放入下一轮要处理的1度点
                if (degree[neighbor]===1){
                    queue.push(neighbor)
                }
            }
        }
    }
    //返回结果
    return  res
};
