/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    let m = new Map()
    m.set('I', '1')
    m.set('IV', '4')
    m.set('V', '5')
    m.set('IX', '9')
    m.set('X', '10')
    m.set('XL', '40')
    m.set('L', '50')
    m.set('XC', '90')
    m.set('C', '100')
    m.set('CD', '400')
    m.set('D', '500')
    m.set('CM', '900')
    m.set('M', '1000')
    // 将map集合转换为entry数组 键值对的形式
    // 注意数据格式
    let en = m.entries()
    for (const [key,value] of en) {
        // 相当于解构赋值得到键值对
        // 也可以写成一个变量得到键值对数组
    }
    let entry = Array.from(m.entries())
    let res = 0
    // map-obj
    let obj = Object.fromEntries(m.entries());
    // obj-map
    let newMap = new Map(Object.entries(obj))
    // console.log(newMap)
    for (let i = 0; i < s.length;) {
        if (i + 1 < s.length && m.has(s.substring(i, i + 2))) {
            res += m.get(s.substring(i, i + 2))
            i += 2
        } else {
            res += m.get(s[i])
            i++
        }
    }
    return res
};
romanToInt('I')