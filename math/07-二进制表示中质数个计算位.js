/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
let resString = null
const countPrimeSetBits = function (left, right) {
    // 返回计算置位
    const compute = (start, end) => {
        let res = []
        for (let i = start; i <= end; i++) {
            let count = 0
            for (let j = 0; j < 32; j++) {
                if ((i >>> j) & 1) {
                    count++
                }
            }
            res.push(count)
        }
        return res
    }
    // 判断是否为质数
    const isPrime = (number) => {
        if (number===1) return  false
        let isPrime = true
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false
                break
            }
        }
        return isPrime
    }
    let arr = compute(left, right)
    let m = new Map()
    let sum = 0
    for (const arrElement of arr) {
        if (m.has(arrElement)) {
            m.set(arrElement, m.get(arrElement) + 1)
        } else {
            m.set(arrElement, 1)
        }
    }
    let keys = m.keys();
    for (const key of keys) {
        if (isPrime(key)) {
            sum += m.get(key)
        }
    }
    return sum

};

