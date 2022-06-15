/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = function(tickets) {
    let res = ['JFK'],map = {};
    for (const [from,to] of tickets) {
        if (!map[from]) {
            map[from] = []
        }
        map[from].push(to)
    }
    // 按字母顺序排序
    for (const mapKey in map) {
        map[mapKey].sort()
    }
    function backtracking() {
        // 递归出口，结果等于机票的个数+1
        if (res.length===tickets.length+1) {
            return true
        }
        if (!map[res[res.length-1]].length||!map[res[res.length-1]]) {
            return false
        }
        for (let i = 0; i < map[res[res.length-1]].length; i++) {
            let city = map[res[res.length-1]][i]
            // 删除走过的路线
            map[res[res.length-1]].splice(i,1)
            res.push(city)
            if (backtracking()) {
                return  true
            }
            res.pop()
            map[res[res.length-1]].splice(i,0,city)
        }
    }
    backtracking()
    return  res
}