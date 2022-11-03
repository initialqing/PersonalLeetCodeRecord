/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    if (s.length === 1) return s
    if (s.length === 2 && s[0] === s[1]) return s
    let res = ''
    for (let i = 1; i < s.length; i++) {
        let str = ''
        str += s[i]
        let left = i - 1
        while (s[i + 1] === s[i]) {
            str += s[i]
            i++
        }
        let right = i

    }
};