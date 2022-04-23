/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let s = x +''
    let arr = Array.from(s)
    let left=0,right = s.length-1;
    for (let i = 0; i <s.length/2; i++) {
        if (s[left]!==s[right]) {
            return false
        }
        left++
        right--
    }
    return true
};