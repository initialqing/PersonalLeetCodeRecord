/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = function(widths, s) {
    // 至少需要一行，满了之后就需要两行
    let count = 1
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        // 得到字母的索引位置
        let index = s[i].charCodeAt()-'a'.charCodeAt()
        // 先将遍历到的字母的宽度加上
        sum+=widths[index]
        // 判断字母的长度是否超过100了，超过100 就需要新的一行新的一行的宽度（sum）为当前加上的字母的宽度
        if (widths>100){
            count++
            sum = widths[index]
        }
        // 小于等于100不用管，继续添加
    }
    return [count,sum]
};