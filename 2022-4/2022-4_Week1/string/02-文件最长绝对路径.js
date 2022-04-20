/**
 * @param {string} input
 * @return {number}
 */
const lengthLongestPath = function (input) {
    let res = 0
    let stack = []
    stack.push(0)
    let newString = input.split('\n')
    for (let i = 0; i < newString.length; i++) {
        // 确定当前文件的层级，当没有/t的时候返回-1，说明文件在0级。
        // 需要注意的是lastIndexOf
        let level = newString[i].lastIndexOf('\t') + 1
        /**
         * 较难理解的部分
         */
        while (stack.length - level > 1){
            stack.pop()
        }
            // 	\t\tsubsubdir1 这个字符串的长度为出去\之后的长度，计算length的时候需要减去层数补上1  也就是说长度为subsubdir1/ 这个/是算在字符串长度中的
        let length = stack[stack.length - 1] + (newString[i].length - level + 1)
        console.log(newString[i])
        stack.push(length)
        if (newString[i].includes('.')) {
            res = Math.max(res, length-1)
        }
    }
    return res
};
let input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"

console.log(lengthLongestPath(input))