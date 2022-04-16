const firstUniqChar = (s) => {
    let m = new Map()
    for (let i = 0; i < s.length; i++) {
        if (m.has(s[i])){
            // console.log(m[s[i]])
            // m[s[i]]++
            m.set(s[i],m.get(s[i])+1)
        }else {
            m.set(s[i],1)
        }
    }
    for (const [key,value] of m) {
        if (value===1) {
            return s.indexOf(key)
        }
    }
    return -1
}
let s = 'leetcode'
console.log(firstUniqChar(s))