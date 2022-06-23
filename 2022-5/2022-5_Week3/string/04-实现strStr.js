/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if (needle === '') return 0
    let next = getNext(needle)
    let i = 0, j = 0
    // i只递增但是不会减少，且遍历主串
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++
            j++
        } else if (j > 0) {
            j = next[j - 1]
        } else {
            i++
        }
        if (j === needle.length) {
            // 返回第一次遇到的位置
            return i - j
        }
    }
    return -1
};
// 得到next数组的方法
const getNext = (subStr) => {
    // 计算next数组
    let next = [0], prefix_len = 0, i = 1 // 当前共同前后缀的长度
    while (i < subStr.length) {
        // 如果下一个字符相同的话，就增加最长前缀的长度
        if (subStr[prefix_len] === subStr[i]) {
            prefix_len++
            next.push(prefix_len)
            i++
        } else {
            // 如果不相同且最长前缀的长度为0，此字符的最长前缀长度为0
            if (prefix_len === 0) {
                next.push(0)
                i++
            } else {
                // 最长前缀不为0，那么就更新最长前缀的长度，继续比较。
                prefix_len = next[prefix_len - 1]
            }
        }
    }
    return next
}
