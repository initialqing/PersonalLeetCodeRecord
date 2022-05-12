/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let length = s.length
    let dp = new Array(length+1).fill(0)
    dp[0] = 1
    for(let i = 1;i<=length;i++) {
        if(s.charAt(i-1)!=='0') dp[i] = dp[i-1]
        if(i>=2) {
            let  t = (s.charAt(i - 2) - '0') * 10 + (s.charAt(i - 1) - '0') * 1;
            console.log(t)
            if(t>=10&&t<=26) {
                dp[i] += dp[i-2]
            }

        }
    }
    console.log(dp)
    return dp[length]
};
