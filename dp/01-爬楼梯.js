/**
 * @param {number} n
 * @return {number}
 */

let climbStairs = function(n) {

    function climb(n,a,b) {
        if(n<=1) return b
        return  climb(n-1,b,a+b)
    }
    return climb(n,1,1)
    /**
     * 就是一个纳契数列的数值
     */
    if(n<=2) return n
    let first = 1
    let second = 2
    let sum = 0
    while(n-2>0){
        sum = first + second
        first = second
        second = sum
        n--
    }
    return sum
    /**
     * 动态规划求解
     */
    if (n<3) return  n
    let arr = []
    for (let i = 3; i < n; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n-1]
};
