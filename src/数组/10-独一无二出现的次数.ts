/**
 *
 * @param arr
 */
function uniqueOccurrences(arr: number[]): boolean {
    type Map = {
        [k in string]: number
    }
    let map: Map = {};
    for (const ele of arr) {
        if (map[ele]) {
            map[ele]++
        } else {
            map[ele] = 1
        }
    }
    // 创建一个新的可迭代对象map,为了使用for---of
    const newMap = new Map(Object.entries(map))
    console.log(newMap.entries())
    let tempArr:number[] = []
    // 或者直接利用Object创建一个可迭代对象
    for (const [key, value] of Object.entries(map)) {
        if(tempArr.indexOf(value)!==-1) return false
        tempArr.push(value)
    }
    return true
};
