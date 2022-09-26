/**
 * 两个map建立映射关系s[i] t[j]
 * @param s
 * @param t
 */
function isIsomorphic(s: string, t: string): boolean {
    // 两个map 遍历的时候进行 s[i] 和 t[j]的映射
    let map1: Map<string, string> = new Map()
    let map2: Map<string, string> = new Map()

    for (let i = 0; i < s.length; i++) {
        let temp1: string | undefined = map1.get(s[i])
        let temp2: string | undefined = map2.get(t[i])
        if (temp1 === undefined && temp2 === undefined) {
            map1.set(s[i], t[i])
            map2.set(t[i], s[i])
        } else if (temp1 !== t[i] || temp2 !== s[i]) {
            return false
        }
    }
    return true
};
