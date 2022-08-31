/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
    let sArr = s.split(''), tArr = t.split('')
    let pointLeft = 0, pointRight = 0

    // 双指针，一个指针指向s 一个指针指向t
    while (pointLeft < sArr.length && pointRight < tArr.length) {
        // 相等两个指针后移
        if (sArr[pointLeft] === tArr[pointRight]) {
            pointLeft++
            pointRight++
        } else {
            // 不相等t指针后移继续寻找和前面指针相等的；
            pointRight++
        }
    }
    return pointLeft === sArr.length - 1
};
const isSubsequenceDp = function (s, t) {
    const [m, n] = [s.length, t.length]
    let dp = new Array(s.length + 1).fill(0).map(() => new Array(t.length + 1).fill(0))
    s = s.split('');
    t = t.split('')
    // 注意因为数组较大所以有等号
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            // 子字符串中的一个和父字符串中的一个相同，更新状态
            if (s[i - 1] === s[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                continue
            }
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        }
    }
    console.log(dp)
    return dp[s.length][t.length] === s.length
};
isSubsequenceDp('abc', 'ahbgdc')
console.log(isSubsequenceDp('abc', 'ahbgdc'))
