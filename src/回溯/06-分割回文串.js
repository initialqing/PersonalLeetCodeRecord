/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
    const isPalindrome = (string, start, end) => {
        for (let i = start, j = end; i < j; i++, j--) {
            if (s[i] !== s[j]) {
                return false
            }
        }
        return true
    }
    let temp = [], res = []
    const helper = (s, startIndex) => {
        if (startIndex >= s.length) {
            res.push([...temp])
            return
        }
        for (let i = startIndex; i < s.length; i++) {
            if (isPalindrome(s, startIndex, i)) {
                const str = s.substr(startIndex, i - startIndex + 1)
                temp.push(str)
            } else {
                continue
            }
            helper(s, i + 1)
            temp.pop()
        }
    }
    helper(s, 0)
    return res
};
partition('aab')