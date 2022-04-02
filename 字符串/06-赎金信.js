const canConstruct = (ransomNote,magazine) => {
  let m1 = new Map()
  let m2 = new Map()
    // let m1 = {}
    // let m2 = {}
    for (let i = 0; i < ransomNote.length; i++) {
        if (m1.has(ransomNote[i])){
            // m1[ransomNote[i]]++
            m1.set(ransomNote[i],m1.get(ransomNote[i])+1)
        }else {
            m1.set(ransomNote[i],1)
        }
    }
    for (let i = 0; i < magazine.length; i++) {
        if (m2.has(magazine[i])){
            m2.set(magazine[i],m2.get(magazine[i])+1)
        }else {
            m2.set(magazine[i],1)
        }
    }
    for (const [key,value] of m1) {
        if (!m2.has(key) || value > m2.get(key)) {
            return false
        }
    }
    return true
}
console.log(canConstruct())