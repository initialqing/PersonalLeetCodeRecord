/**
 * @param {string} s
 * @return {string[]}
 */
// https://leetcode.cn/problems/remove-invalid-parentheses/solution/java-bfs-hui-su-liang-chong-fang-fa-shi-pin-jiang-/
 function isValidBrackets (brackets){
    const stack = []
    for(let i = 0;i<brackets.length;i++){
        if(/[a-zA-Z]/.test(brackets[i]) || brackets[i] === '@') {
            continue
        }
        if(brackets[i] === '(') {
            stack.push(brackets[i])
        }else {
            if(!stack.length) {
                return false
            }
            if(stack.pop() !== '(') {
                return false
            }
        }
    }
    return !stack.length
}
function toChars(brackets){
    let s = ''
    for(let i = 0;i<brackets.length;i++) {
        if(brackets[i] === '@') {
            continue
        }
        s+=brackets[i]
    }
    return s
}
const removeInvalidParentheses = function(s) {
    const resCan =  []
    s = s.split('')
    function backTracking(strs,startIndex){
        if(isValidBrackets(strs) && !resCan.includes(toChars(strs))) {
            resCan.push(toChars(strs))
            return
        }
        for(let i = startIndex;i<s.length;i++) {
            if(s[i] === '@' || /[a-zA-Z]/.test(s[i])) {
                continue
            }
            const temp  = s[i]
            strs[i] = '@'
            backTracking(strs,i+1)
            strs[i] = temp
        }
    }
    backTracking(s,0)
    let maxLen = 0,res = []
    for(let i = 0;i<resCan.length;i++) {
        if(resCan[i].length > maxLen) {
            maxLen = resCan[i].length
        }
    }
    for(const ele of resCan) {
        if(ele.length === maxLen) {
            res.push(ele)
        }
    } 
    return res
};