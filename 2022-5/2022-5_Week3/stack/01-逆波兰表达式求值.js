/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [],flag = ['+','-','*','/']
    for(const ele of tokens) {
        if(!flag.includes(ele)) {
            // console.log(ele)
            stack.push(ele-0)
            continue
        }
        let index = flag.indexOf(ele)
        let num2  = stack.pop(),num1 = stack.pop()

        let res = calc(num1,num2,index)
        stack.push(res)
        // console.log(stack)

    }

    return stack[0]
};
const calc = (num1,num2,index) => {
    if(index===0) {
        return num1+num2
    }else if(index===1) {
        return num1-num2
    }else if(index===2) {
        return num1*num2
    }else {
        console.log(-0.04|0) // 输出0  两个数进行或运算 可以将小数部分去除
        // 这一点还是比较重要的哈
        return num1/num2 | 0
    }
}
