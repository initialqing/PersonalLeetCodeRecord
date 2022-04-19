/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortestToChar = function (s, c) {
    // 存放结果
    let res = []
    // 存放c字符在s中出现时候的索引
    let index = []
    // let temp = c
    // 得到c字符的索引数组，以后用来比较寻找最小的索引
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            index.push(i)
        }
    }
    for (let i = 0; i < s.length; i++) {
        let minVal = 10000
        for (let j = 0; j < index.length; j++) {
            let temp = Math.abs(i - index[j])
            if (temp < minVal) {
                minVal = temp
            }
        }
        res.push(minVal)
    }
    return res
};
console.log(shortestToChar('loveleetcode', 'e'))