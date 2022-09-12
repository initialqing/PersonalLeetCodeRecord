/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
    let res = []
    let n = p.length
    let pCount = new Array(26).fill(0)
    for(let i = 0;i<p.length;i++) {
        let s = p[i].charCodeAt()-'a'.charCodeAt()
        pCount[s]++
    }
    const judge = (temp) => {
        let tempCount = new Array(26).fill(0)
        for(let j = 0;j<temp.length;j++) {
            let s = temp[j].charCodeAt()- 'a'.charCodeAt()
            tempCount[s]++
        }
        for(let k = 0;k<26;k++) {
            if(pCount[k]!== tempCount[k]) {
                return false
            }
        }
        return true
    }

    for(let i = 0;i<s.length;i++) {
        let right = i + n
        let temp = s.slice(i,right)
        if(judge(temp)) {
            res.push(i)
        }
    }
    return res
};
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function(s, p) {
    let res = []
    let window = {},need = {},left = 0,right = 0,valid = 0
    for(const ele of p) {
        if(!need[ele]) {
            need[ele] = 0
        }
        need[ele]++
        window[ele] = 0
    }
    // validSize的大小等于不同字符的个数
    let validSize  = Object.keys(need).length
    while(right < s.length) {
        //
        // 得到当前遍历的字符的值
        const char = s[right]
        // 窗口向后移动
        right++
        if(need[char]!==undefined) {
            // 窗口中出现了这个字符则次数++
            window[char]++
            // 窗口中出现这个字符的次数和需要的这个字符出现次数相等则有效值++
            if(need[char]===window[char]) {
                valid++
            }
        }
        // 判断是否符合要求加入结果数组
        if(valid === validSize) {
            res.push(left)
        }
        // 收缩窗口的逻辑，主要是对窗口进行操作
        while(right - left >= p.length) {
            // 等到窗口左边界的字符
            const char = s[left]
            // 把窗口左边界线增加
            left++
            // 窗口中存在这个字符
            if(window[char]!==undefined) {
                // 判断这个字符是否和需要的字符次数一致，如果一致就需要把有效的数字--
                if(window[char]===need[char]) {
                    valid--
                }
                // 这个字符在窗口出现的次数--
                window[char]--
            }
        }
    }
    return res
};
console.log(findAnagrams('baa','aa'))
