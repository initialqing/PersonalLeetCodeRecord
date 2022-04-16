/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(c)
        } else {
            let top = stack[stack.length - 1]
            if (c === ')' && top === '(' || c === '}' && top === '{' || c === ']' && top === '[') {
                stack.pop()
            } else {
                return false
            }
            // return false
        }
    }
    return stack.length === 0

};
/**
 * 栈的另一种写法
 */
    //let stack = []
const method = (s) => {
        let obj = {
            '{':'}',
            '[':']',
            '(':')'
        }
        let stack = []
        for(let i = 0;i<s.length;i++){
            if(s[i]==='{'||s[i]==='('||s[i]==='['){
                stack.push(s[i])
            }else {
                let pop = stack.pop()
                if(obj[pop]!==s[i]) {
                    return false
                }
            }
        }
        return stack.length===0
}

