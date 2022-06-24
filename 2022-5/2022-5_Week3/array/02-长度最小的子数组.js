/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
    let res = +Infinity
    let left = 0, right = 0, sum = 0,length = nums.length
    while (right < length) {
        // 增大窗口
        sum += nums[right]
        while (sum >= target) {
            // 缩小窗口并记录答案的代码逻辑
            res = Math.min(res, right - left + 1)
            sum -= nums[left]
            left++
            // 到了窗口边界直接跳出
            if (sum < target) {
                break
            }
        }
        right++
    }
    return res === +Infinity ? 0 : res
};
