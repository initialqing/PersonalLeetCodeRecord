/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let res = []
    let go = []
    for (const goalElement of goal) {
        go.push(goalElement)
    }
    for (const sElement of s) {
        res.push(sElement)
    }
    const inverse = (res) => {
        let initial = res[0]
        for (let i = 0; i < res.length; i++) {
            console.log(initial)
            if (i !== res.length - 1) {
                res[i] = res[i + 1]
            }else {
                res[i] = initial
            }
        }
        return res
    }
    let n = res.length

    while(n>=0) {
        if(res.toString()===go.toString()) {
            return true
        }else {
            res = inverse(res)
            n--
        }
    }
    return false
};
const test = (s) => {
    s = s + s
    return s
}
console.log(test('abcde'))