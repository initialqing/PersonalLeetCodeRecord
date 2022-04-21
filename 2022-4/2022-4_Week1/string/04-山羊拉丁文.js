/**
 * @param {string} sentence
 * @return {string}
 */
const toGoatLatin = function (sentence) {
    // sentence = sentence.toLowerCase()
    let o = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let res = []
    let arr = sentence.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (o.includes(arr[i][0])) {
            let str = arr[i].concat('ma')
            for (let j = 0; j < i + 1; j++) {
                str = str.concat('a')
            }
            res.push(str)
        } else {
            let str = ''
            for (let j = 0; j < arr[i].length; j++) {
                if (j === arr[i].length - 1) {
                    str += arr[i][0]
                } else {
                    str += arr[i][j + 1]
                }
            }
            str = str.concat('ma')
            for (let j = 0; j < i + 1; j++) {
                str = str.concat('a')
            }
            res.push(str)

        }
    }
    res = res.join(' ')
    return  res
};
let result = toGoatLatin("I speak Goat Latin")
console.log(result)