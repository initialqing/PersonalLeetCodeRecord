/**
 *
 *这个题目还没有做完_2022-4-28
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
    let stack = []
    let count = 0
    for(const sele of s){
        if(sele==='(') {
            stack.push(sele)
        }else{
            if(stack.length) {
                let temp = stack.pop()
                if(temp==='(') {
                    count += 2
                }
            }
        }
    }
    return count
};
let res = longestValidParentheses('(()')
console.log(res)