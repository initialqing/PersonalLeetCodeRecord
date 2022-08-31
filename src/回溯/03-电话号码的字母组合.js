/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    const map = {
        0:'',
        1:'',
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz',
    }
    let res = [],s = []
    const helper = (digits,index) => {
        if(index===digits.length) {
            res.push(s.join(''))
            return
        }
        let digit = digits[index] - '0'
        let letters = map[digit]
        for(let i = 0;i<letters.length;i++) {
            s.push(letters[i])
            helper(digits,index+1)
            s.pop()
        }
    }
    if(!digits.length) return res
    helper(digits,0)
    return res
};