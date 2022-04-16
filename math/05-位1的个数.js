/**
 * 解决方法1 暴力循环
 * @param n
 * @returns {number}
 */
const hammingWeight = function(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        // 将1左移i位数字
        if ((n & (1 << i)) !== 0) {
            ret++;
        }
    }
    return ret;
};
/**
 * 解决方法2
 * 位运算
 */
const  hammingWeight = function (n) {
   let res = 0
   while (n){
       n &= n-1
       res++
   }
   return  res
}
