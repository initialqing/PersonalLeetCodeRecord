const isAnagram = (s,t) => {
    if (s.length!==t.length) return  false
  let m1 = new Map()
    for (let sElement of s) {
        m1[sElement] = m1[sElement] ? m1[sElement]+1 : 1
    }
    for (let tElement of t) {
        if (!m1[tElement]) {
            return false
        }
        m1[tElement]--
    }
    for (let [key,value] of m1) {
        if (value!==0) return false
    }
    return true

//   let m1 = []
//   let m2 = []
//     for (const m2Element of s) {
//         m2.push(m2Element)
//     }
//     for (const m1Element of t) {
//         m1.push(m1Element)
//     }
//     return m1.sort().toString() === m2.sort().toString()
}
let s = "anagram"
let t = "nagaram"
console.log(isAnagram('ab','a'))