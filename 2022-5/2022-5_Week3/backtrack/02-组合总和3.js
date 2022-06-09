/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
    let res = [], temp = [], sum = 0
    const helper = (k, n, start) => {
        if (temp.length === k) {
            if (sum === n) {
                res.push([...temp])
            }
            return
        }
        for (let i = start; i <= 9; i++) {
            temp.push(i)
            sum += i
            helper(k, n, i + 1)
            sum -= i
            temp.pop()
        }
    }
    helper(k, n, 1)
    return res
};