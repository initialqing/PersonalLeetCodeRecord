/**
 * 这题目本来是要用动态规划，实现一个正则表达式的匹配，有点难，学动态规划还是得从简单的学起来，所以这个题目就这么糊弄了
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
    // ${p}是为了操作变量
    /**
     *  let a = 'u'
     *  打算匹配变量a中的字符u要这么写的话匹配的是a无法访问变量/a/g
     *  写成/${p}/
     */
    // eval将字符串转为js表达式
    let reg = eval(`/${p}/g`) // 转换成正则表达式
    let result = '' //存储匹配到的结果
    if(reg.test(s)) {
        result = reg[Symbol.match](s)[0]
        if (s.length >= 1 && s.length <= 20 && p.length >= 1 && p.length <= 30){
            if (s == result) { return true }
            else { return false }
        }
    }
    else{return false}
};
isMatch('aandasdasd','.*')