/**
 *
 * @param x
 * @param y
 * @returns {Number}
 */
const hammingDistance = function(x, y) {
    x = x.toString(2)
    y = y.toString(2)
    let maxLength = Math.max(x.length,y.length)
    // 这是字符串的补0操作
    x = x.padStart(maxLength,0)
    y = y.padStart(maxLength,0)
    let res = 0
    for (let i = 0; i < maxLength; i++) {
        if (x[i]!==y[i]) {
            res++
        }
    }
    return res
}
