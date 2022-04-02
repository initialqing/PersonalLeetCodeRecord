function max(strs) {
    if (strs.length === 0 && strs === ' ') {
        return ' '
    }
    let pre = strs[0]
    for (let i = 1; i < strs.length; i++) {
        // 遍历结束其中某一个字符串之后，从新置指针为0
        let j = 0
        // 第二个条件是为了防止j的数值超过第一个字符串的长度，从而得到大于的结果
        while (j < strs[i].length && j < pre.length) {
            if (strs[i][j] !== pre[j]) {
                break
            }
            j++
        }
        pre = pre.substr(0, j)
    }
    return pre
}

console.log(max(["flower", "flow", "flight"]))
