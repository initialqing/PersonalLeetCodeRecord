// https://www.programmercarl.com/0132.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2II.html#java
function minCut(s: string): number {
    const palindromic: boolean[][] = isPanlindromic(s)
    const dp: number[] = new Array(s.length).fill(0)
    
    // 初始化dp[i] = i 
    for (let i = 0; i < s.length; i++) {
        dp[i] = i
    }
    
    for (let i = 0; i < s.length; i++) {
        if (palindromic[0][i]) {
            dp[i] = 0
            continue
        }

        for (let j = 0; j < i; j++) {
            if (palindromic[j + 1][i]) {
                dp[i] = Math.min(dp[j] + 1, dp[i])
            }
        }
    }
    return dp[s.length - 1]
};

// 动态规划解决回文子串判断[i,j]区间内的子串是不是回文子串。
const isPanlindromic = (s: string): Array<Array<boolean>> => {
    let palindromic = new Array(s.length).fill(0).map(_ => new Array(s.length).fill(false))

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length; j++) {
            if (s[i] === s[j] && (j - i <= 1 || palindromic[i + 1][j - 1])) {
                palindromic[i][j] = true
            }
        }
    }
    return palindromic
}