/**
 * 输入：s = "[123,[456,[789]]]",
 * 输出：[123,[456,[789]]]
 * 解释：返回一个 NestedInteger 对象包含一个有两个元素的嵌套列表：
 * 1. 一个 integer 包含值 123
 * 2. 一个包含两个元素的嵌套列表：
 *     i.  一个 integer 包含值 456
 *     ii. 一个包含一个元素的嵌套列表
 *          a. 一个 integer 包含值 789
 *
 */
// 相当于套娃也就是说： 输入[123,[456,[789]]]
// NestedInteger(456)包含NestedInteger(789)  NestedInteger(123)包含前边的所有
// 输出的时候 NestedInteger(123).add(NestedInteger(456).add(NestedInteger(789)))
/**
 * @param {string} s
 * @return {NestedInteger}
 */
const deserialize = function (s) {
    // 指定字符串的索引
    let index = 0
    // 判断字符串是否为数字的函数
    const isDigit = (ch) => {
        return parseFloat(ch).toString() === 'NaN' ? false : true
    }
    // 深度优先搜索
    const dfs = (s) => {
        // 每当遇到一个左边括号 就让索引后移 然后创建一个NestedInteger对象
        if (s[index] === '[') {
            index++
            const ni = new NestedInteger()
            while (s[index] !== ']') {
                // 只要没有遇到右边的括号就递归
                ni.add(dfs(s))
                // 遇到','不用管直接后移
                if (s[index] === ',') {
                    index++
                }
            }
            // 回溯阶段的代码
            index++
            return ni
        } else {
            // 负号标记
            let negative = false
            if (s[index] === '-') {
                negative = true
                index++
            }
            // 实例化NestedInteger的数字
            let num = 0
            // 只要index没越界 以及 是数字就向后边迭代，同时计算字符串的数值
            while (index < s.length && isDigit(s[index])) {
                num = num * 10 + s[index].charCodeAt() - '0'.charCodeAt()
                index++
            }
            if (negative) {
                num *= -1
            }
            // 返回实例化对象
            return new NestedInteger(num)
        }
    }
    return dfs(s)
};