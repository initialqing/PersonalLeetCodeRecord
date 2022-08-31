/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    let m1 = new Map(),m2 = new Map()
    for (let i = 0; i < ransomNote.length; i++) {
        m1.set(ransomNote[i],(m1.get(ransomNote[i]) || 0) + 1)
    }
    for (let i = 0; i < magazine.length; i++) {
        m2.set(magazine[i],(m2.get(magazine[i]) || 0) + 1)
    }
    for (const [key,value] of m1) {
        if (!m2.get(key) || value>m2.get(key)) {
            return false
        }
    }
    return true
};
