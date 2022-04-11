/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function (n) {
    // 0个数字直接返回
    // 1个数字因此有10种不同的选择
    if (n === 0) return 1
    if (n === 1) return 10
    // 位数为1的时候那么有基础的10种选择
    let res = 10
    // 用来叠加计算
    let cur = 9
    for (let i = 0; i < n - 1; i++) {
        cur *= 9 - i
        res += cur
    }
    return res
};