/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
let reverseBits = function (n) {
    let res = 0
    for (let i = 0; i < 32; i++) {
        // res 左边移动一位
        res <<= 1
        // res 加上n的最后一位数字 |可以换为+
        res |= n & 1
        // 右移一位
        n >>>= 1
    }
    // 转换为无符号位
    return  res >>>0
};
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
    let str = n.toString(2)
    let a = ''
    if(str.length<32) {
        let num = 32-str.length
        for(let i = 0;i<num;i++){
            a += 0
        }
    }
    let str1 = a+str
    let str2 = str1.split('').reverse().join('')
    // 第二个参数表示被解析的为二进制数 第一个参数为字符串，不是字符串系统会自动转换
    return parseInt(str2,2)
};
