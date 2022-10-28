/**
 * 后面的丑数可以通过前面的丑数分别× 2 3 5 推到过来，可以取前面丑数乘 2 3 5 中选取最小的
 * @param n 
 * @returns 
 */
function nthUglyNumber(n: number): number {
    let res = new Array(n).fill(0)
    // 分别控制前面前面丑数结果值的索引，对应结果值 * 2 * 3 * 5
    let t2 = 0,t3 = 0,t5 = 0
    res[0] = 1
    for(let i = 1;i<res.length;i++) {
        res[i] = Math.min(res[t2] * 2,Math.min(res[t3]*3,res[t5]*5))
        // 假如某个数被选中了，控制前面丑数结果值的索引++，更新丑数
        if(res[i] === res[t2] * 2) t2++
        if(res[i] === res[t3] * 3) t3++
        if(res[i] === res[t5] * 5) t5++
    }

    return res[n-1]
};