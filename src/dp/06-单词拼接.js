/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    //1.确定dp数组的下标以及含义
    // dp[i] : 字符串长度为i的话，dp[i]为true，表示可以拆分为一个或多个在字典中出现的单词。
    //2.确定递推公式
    //3.dp数组初始化
    //4.确定遍历顺序
    let dp = new Array(s.length+1).fill(false)
    dp[0] = true
    for(let i = 0;i<=s.length;i++) {
        for(let j = 0;j<wordDict.length;j++) {
            const temp  = wordDict[j].length

            if(i>=temp) {
                if(s.slice(i - temp,i) === wordDict[j]
                    &&dp[i - temp]
                ){
                    dp[i] = true
                }
            }
        }
    }
    return dp[s.length]
};
s = "leetcode", wordDict = ["leet", "code"]
wordBreak(s,wordDict)
