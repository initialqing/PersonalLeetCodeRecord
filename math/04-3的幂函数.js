/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
    if (n<=0) return false
    // 不停的除以3
    while (n%3===0) {
        n = n%3
    }
    return n===1
};
/**
 * 递归解法
 */
const isPowerOfThree = function(n) {
    // 定义出口
    if (n<=0) return false
    if (n===1) return true
    if (n%3!==0) return false
    //没有实现上述条件说明还有拯救的余地，再次调用自己判断
    return isPowerOfThree(n/3)
};