/**
 * @param {number} n
 * @return {number}
 */
const largestPalindrome = function (n) {
    if (n === 1) {
        return 9
    }
    const upper = 10 ** n - 1
    for (let left = upper; left > upper / 10; left--) {
        let right = String(left).split('').reverse().join('')
        // 得到回文数
        let p = BigInt(String(left) + right)
        let x = BigInt(upper)
        while (x * x >= p) {
            if (p % x === BigInt(0)) {
                return p % BigInt(1337)
            }
            x--
        }
    }
};