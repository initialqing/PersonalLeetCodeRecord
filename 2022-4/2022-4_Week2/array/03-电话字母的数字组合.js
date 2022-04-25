/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    let str = ''
    let letters = [
        [],
        [],
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i'],
        ['j','k','l'],
        ['m','n','o'],
        ['p','q','r','s'],
        ['t','u','v'],
        ['w','x','y','z']
    ]
    let res  = []
    let arr
    for (let i = 0;i<digits.length;i++) {
        arr = []
        if(i===0) {
            arr = [...letters[digits[0]]]
        }else {
            for(let j =0,l = letters[digits[i]].length;j<l;j++) {
                let temp = letters[digits[i]][j]
                res.forEach(item => {
                    arr.push(item+temp)
                })
            }

        }
        res = arr
    }
    return res
};
