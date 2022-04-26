/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    let set = new Set(['()'])
    // 从第二个开始插入
    for (let i = 2; i <= n; i++) {
        // 初始化中间变量
        let nextSet = new Set()
        // 遍历set
        for (const s of set) {
            // console.log(s)
            for (let j = 0; j <s.length; j++) {
                // 将括号插入到任意的位置
                nextSet.add(s.slice(0,j)+'()'+s.slice(j))
            }
        }
        set = nextSet
    }
    return set
};
let res = generateParenthesis(2)
console.log(res)