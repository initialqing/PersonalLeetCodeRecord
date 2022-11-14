/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0) // 入度
    const map = {} // 记录元素的出度，后续课程列表(数组表示)
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++ // 相应的元素入度++
        if(!map[prerequisites[i][1]]) { // 假如不存在
            map[prerequisites[i][1]] = [prerequisites[i][0]]
        }else {
            map[prerequisites[i][1]].push(prerequisites[i][0])
        }
    }
    const queue = [],res = []
    // 入度为0的元素进入队列
    for(let i = 0;i<inDegree.length;i++) {
        if(!inDegree[i]) {
            queue.push(i)
            res.push(i)
        }
    }
    let count = 0
    // bfs
    while(queue.length) {
        const temp = queue.shift()
        count++
        // 后续课程
        const endQueue = map[temp]
        if(endQueue && endQueue.length) {
            for(let i = 0;i < endQueue.length;i++) {
                inDegree[endQueue[i]]--
                if(inDegree[endQueue[i]]===0) {
                    queue.push(endQueue[i])
                    res.push(endQueue[i])
                }
                
            }
        }
    }
    return count === numCourses ? res: []
};