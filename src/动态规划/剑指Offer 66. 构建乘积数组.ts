
/**+
 * 与接雨水的思路一致，分成左右两个部分, 从左到右遍历一遍，从右到左遍历一遍
 * 计算每个元素左右两边除去当前元素的乘积
 */
function constructArr(nums: number[]): number[] {
    if (!nums.length) return []
    let leftSum = []
    let rightSum = [], res = []
    leftSum[0] = 1
    rightSum[nums.length - 1] = 1
    for (let i = 1; i < nums.length; i++) {
        leftSum[i] = leftSum[i - 1] * nums[i - 1]
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] * nums[i + 1]
    }
    for (let i = 0; i < nums.length; i++) {
        res[i] = leftSum[i] * rightSum[i]
    }
    return res
};