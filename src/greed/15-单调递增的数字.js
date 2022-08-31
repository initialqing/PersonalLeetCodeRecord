/**
 * @param {number} n
 * @return {number}
 */
const monotoneIncreasingDigits = function(n) {
    let s = n + ''
    let string = s.split(''),flag = string.length
    for(let i = string.length-1;i>0;i--) {

        if(string[i-1]>string[i]) {
            // 不停的记录需要转变成9的位置
            string[i-1]--
            flag = i
        }
    }
    for(let i = flag;i<string.length;i++) {
        string[i] = 9
    }
    string = string.join('')
    // 类型转换
    console.log(typeof +string)
};