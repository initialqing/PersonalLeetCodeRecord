/**
 * 思路：直接模拟，两个指针分别指向不同字符串，相同则都后移，否则另作处理
 * @param name
 * @param typed
 */
// 输入：name = "alex", typed = "aaleex"
// 输出：true
// 解释：'alex' 中的 'a' 和 'e' 被长按。
function isLongPressedName(name: string, typed: string): boolean {
    let i = 0, j = 0
    while (i < name.length && j < typed.length) {
        if (name[i] === typed[j]) {
            i++
            j++
        } else {
            if (j === 0) {
                return false
            } else {
                while (j < typed.length && typed[j] === typed[j - 1]) {
                    j++
                }
                if (name[i] === typed[j]) {
                    i++
                    j++
                } else {
                    return false
                }
            }
        }
    }

    if (i < name.length) return false
    while (j < typed.length) {
        if(typed[j] === typed[j-1]) j++
        else {
            return false
        }
    }
    return true
};

