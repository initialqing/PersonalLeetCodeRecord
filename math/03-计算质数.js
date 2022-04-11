/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
    /**
     * 暴力超时
     * @type {any[]}
     */
    // const isPrime = (x) => {
    //     for (let i = 2; i < x; i++) {
    //         if (x % i === 0) {
    //             return false
    //         }
    //     }
    //     return true
    // }
    // let ans = 0
    // for (let i = 2; i < n; i++) {
    //     ans += isPrime(i)
    // }
    // return ans
    const isPrime = new Array(n).fill(1);
    let ans = 0;
    for (let i = 2; i < n; ++i) {
        if (isPrime[i]) {
            ans += 1;
            // 在合数的位置设置为0
            // 假如i为5的话  2*5 3*5 4*5 前面已经修改过了  因为2的倍数 3的倍数中有5
            for (let j = i*i ; j < n; j += i) {
                console.log(j)
                isPrime[j] = 0;
            }
        }
    }
    return ans;
};
let number = countPrimes(100);
console.log('质数为：'+number)