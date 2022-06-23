/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    // 核心思想， 得到next数组，假如next数组的最后一项不为0
    // 数组长度减去最长相同前后缀的长度相当于是第一个周期的长度，也就是一个周期的长度
    // 如果这个周期可以被整除，就说明整个数组就是这个周期的循环，即有重复字符串
    let next = getNext(s)
    console.log(2%2===0)
    if(next[next.length-1]!==0 && s.length % (s.length-next[next.length-1]) ===0) {
        return true
    }else{
        return false
    }
};
const getNext =  (str) =>{
    let next = [0],prefix_len = 0;i=1
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
