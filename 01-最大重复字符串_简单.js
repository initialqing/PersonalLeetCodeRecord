const maxRepeating = function (sequence, word) {
    let max = 1
    let maxWord = word
    while (sequence.indexOf(maxWord) !== -1) {
        max++
        maxWord+=word
    }
    return max-1
}
let res = maxRepeating('ababc', 'ababab');
console.log(res)

