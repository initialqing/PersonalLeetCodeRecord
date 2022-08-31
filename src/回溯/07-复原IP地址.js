/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
    let res = [],path = []
    const helper = (startIndex) => {
        const n = path.length
        if (n>4) return
        if (startIndex>=s.length&&n===4) {
            res.push(path.join('.'))
            return
        }
        for (let i = startIndex; i < s.length; i++) {
            const str = s.substr(startIndex,i-startIndex+1)
            if (+str>255 || str.length>3) break
            if (str.length>1&&str[0]==='0') break
            path.push(str)
            helper(startIndex+1)
            path.pop()
        }
    }
    helper(0)
    return  res
};