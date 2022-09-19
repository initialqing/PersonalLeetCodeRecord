function longestPalindrome(s: string): string {
    if(s.length === 1) return s
    let res:string = '',max:number = 0
    for(let i = 0;i<s.length;i++) {
        let left = i - 1
        let tempStr = s[i]
        // 右指针不预先定义，因为有可能回文串是’ccc‘连续相同字符的情况。
        // 先统计连续相同字符的情况，得到最长回文子串的一个下限
        // 使用变量i的原因是因为，相同的字符串没必要进行左右指针的判断，直接跳过即可，操作i直接跳到相应的索引位置处。
        // 块级作用域操作i，不会影响外部的i，会影响内部的i
        while(s[i+1] === s[i]) {
            tempStr += s[i]
            i++
        }
        let right = i + 1
        
        while(s[left] && s[left] === s[right]) {
            tempStr = s[left] + tempStr + s[right]
            left--
            right++
        }
        if(tempStr.length > max) {
            max = tempStr.length
            res = tempStr
        }
    }
    return res
};