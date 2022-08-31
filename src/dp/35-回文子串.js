/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
    let dp = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false))
    let res = s.length
    for(let i = 0;i<s.length;i++) {
        dp[i][i] = true
    }

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i+1; j < s.length; j++) {
            if (s[i] === s[j]) {
                if (j - i <= 1) {
                    res++
                    dp[i][j] = true
                } else if (dp[i + 1][j - 1]) {
                    res++
                    dp[i][j] = true
                }
            }
        }
    }

    return res
};
