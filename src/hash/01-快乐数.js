/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    let m = new Map()
    // 求和函数
    const getSum = (num) => {
        let sum = 0
        while (num) {
            sum += (num % 10) ** 2
            n = Math.floor(num/10)
        }
        return sum
    }
    // 循环器
    while (true) {
        if (m.has(n)) return  false
        if (n===1) return true
        m.set(n,1)
        n = getSum(n)
    }
};
