/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    let map = {}, max = 0, lasttime = 0
    for (const ele of tasks) {
        map[ele] = (map[ele] || 0) + 1
        max = Math.max(max, map[ele])
    }
    for (const ele of Object.values(map)) {
        if (ele === max) lasttime++
    }
    // 任务种类最大数为max，这一个任务完成的最小时间为(max-1)*(n+1) + 1
    // 假如有多个任务种类的任务数都为max，每多一个max那么最小时间就多一个1
    // 以[A,A,A,B,B,B,C] 为例，A和B的任务数量最多，此时最小时间为(3-1)*(2+1)+1 + 1= 8比只有A多了1
    // 可以A B _ A B _ A B
    return Math.max(tasks.length, (n + 1) * (max - 1) + lasttime)
};