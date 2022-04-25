/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
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
    let res = []
    for (let i =0;i<digits.length;i++) {
        let arr = []
        if(i===0) {
            res = [...letters[digits[i]]]
            continue
        }else {
            for(let j = 0,l = letters[digits[i]].length;j<l;j++) {
                let temp = letters[digits[i]][j]
                res.forEach(item => {
                    arr.push(item +temp)
                })
            }
            res = arr
        }
    }
    return res
};
