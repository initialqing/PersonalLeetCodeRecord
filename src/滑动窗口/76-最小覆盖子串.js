/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// https://leetcode.cn/problems/minimum-window-substring/solution/jsjie-ti-si-lu-qing-xi-ming-liao-by-inte-qmpu/
 var minWindow = function(s, t) {
    if(t.length > s.length) return ''
    let need = {}
    for(const ele of t) {
        need[ele] = (need[ele] || 0) + 1
    }
    let left = 0,right = 0,needLength = Object.keys(need).length,res = ""
    while(right < s.length) {
        const char = s[right]
        if(Object.keys(need).includes(char)) {
            need[char]--
            if(need[char] === 0) {
                needLength--
            }
        }
        while(needLength === 0) {
            const temp = s.substring(left,right+1)
            if(!res || temp.length < res.length) res = temp
            if(Object.keys(need).includes(s[left])) {
                need[s[left]]++
                if(need[s[left]]===1) {
                    needLength+=1
                }

            }
            left++
        }
        right++
    }
    return res
};