/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(false)
    dp[0] = true
    for(let i = 1;i<=s.length;i++) {//遍历背包
        for(let j = 0;j<wordDict.length;j++) {// 遍历物品
            const tempLegth = wordDict[j].length
            // 背包长度大于物品的长度
            if(i>=tempLegth) {
                // 举例leetcode  ['leet','code']
                // j位于索引为0的位置,i位于t 那么将字符回退4个字符长度(leet的长度) 与当前的wordDict[j] 相同 且将4个字符回退后的i值可以由wordDict中的一个或多个字符组成，那么dp[i]的值就为真
                if(s.slice(i-tempLegth,i)===wordDict[j] && dp[i-tempLegth]) {
                    dp[i] = true
                }
            }
        }
    }
    return dp[s.length]
};
