/**
 * @param {string} s
 * @return {string[]}
 */
 function isValidBrackets (brackets){
    const stack = []
    for(let i = 0;i<brackets.length;i++){
        if(/[a-zA-Z]/.test(brackets[i])) {
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
var removeInvalidParentheses = function(s) {
    let queue = [s],found = false,res  =  []
    let visit = new Set()
    visit.add(s)
    while(queue.length) {

        const temp = queue.shift()
        if(isValidBrackets(temp)) {
            found = true
            res.push(temp)
        }
        if(found)  {
            continue
        }

        for(let i = 0;i < temp.length;i++) {
            if(temp.charAt(i) !== '(' && temp.charAt(i) !== ')') {
                continue
            }
            const t = temp.substring(0,i) + temp.substring(i+1)

            if(!visit.has(t)) {
                queue.push(t)
                visit.add(t)
            }
        }
    }
    return res
};