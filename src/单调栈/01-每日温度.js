/**
 * @param {number[]} temperatures
 * @return {number[]}
 * 解法1:暴力解法
 */
const dailyTemperatures0 = function (temperatures) {
    let ans = new Array(temperatures.length).fill(0)
    for (let i = 0; i < temperatures.length; i++) {
        let temp = 0
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                temp = j - i
                break
            }
        }
        ans[i] = temp
    }
    return ans
};

// 单调栈的解法
const dailyTemperatures1 = function (temperatures) {
    // 结果数组
    let ans = new Array(temperatures.length).fill(0)
    // 存放索引
    let stack = [0]
    for (let i = 0; i < temperatures.length; i++) {
        const top = stack[stack.length-1]
            if (temperatures[i]<=temperatures[top]) {
                stack.push(i)
            }else {
                while (stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
                    const top = stack.pop()
                    ans[top] = i - top
                }
                stack.push(i)
            }
    }
    return ans
};
