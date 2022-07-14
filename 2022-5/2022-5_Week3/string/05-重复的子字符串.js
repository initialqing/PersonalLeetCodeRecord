/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    // 核心思想， 得到next数组，假如next数组的最后一项不为0,且数组长度可以整除数组长度减去最长前后缀的长度
    // 数组长度减去最长相同前后缀的长度相当于是第一个周期的长度，也就是一个周期的长度
    // 如果这个周期可以被整除，就说明整个数组就是这个周期的循环，即有重复字符串
    let next = getNext(s)
    console.log(next)
    if(next[next.length-1]!==0 && s.length % (s.length-next[next.length-1]) ===0) {
        return true
    }else{
        return false
    }
};
/**
 * 前缀是指不包含最后一个字符的所有以第一个字符开头的连续子串；
 * 后缀是指不包含第一个字符的所有以最后一个字符结尾的连续子串
 * next数组举例：'ABABA' 对应的next数组为 0 0 1 2 3   前缀以A开头的所有字符  后缀是以B结尾的所有字符   前缀：ABA  后缀：ABA 所以最长公共前后缀长度为3
*              'ABABC' 对应的next数组为 0 0 1 2 0
 * @param str
 * @returns {number[]}
 */
const getNext =  (str) =>{
    let next = [0],prefix_len = 0,i=1
    while(i < str.length) {
        if(str[prefix_len]===str[i]) {
            prefix_len++
            next.push(prefix_len)
            i++
        }else {
            if(prefix_len===0) {
                next.push(0)
                i++
            }else{
                prefix_len = next[prefix_len-1]
            }
        }
    }
    return next
}
repeatedSubstringPattern('abacabab')
