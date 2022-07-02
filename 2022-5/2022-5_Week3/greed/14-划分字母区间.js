/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function(s) {
    let map = new Map(),maxIndex = 0
    // 每个字符出现的最大位置
    for(let i = 0;i<s.length;i++){
        map.set(s[i],i)
    }
    let res = [],left = 0
    for(let i = 0;i<s.length;i++) {
        // 更新字符出现的最远位置
        maxIndex = Math.max(maxIndex,map.get(s[i]))
        // 找到一个区间片段
        if(i===maxIndex) {
            res.push(maxIndex+1-left)
            // 更新区间片段的右边界
            left = i+1
        }
    }
    return res
};