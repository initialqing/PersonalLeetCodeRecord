/**
 *
 * 从数组的每个数开始计算子数组，假如符合条件就把count++
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = function (nums, k) {
    // if (k === 0) return 0
    // let count = 0
    // // 从nums[i]开始 以nums[i]开始符合条件的子数组有多少个，循环完之后就是全部的
    // for (let i = 0; i < nums.length; i++) {
    //     let pre = 1
    //     for (let j = i; j < nums.length; j++) {
    //         pre *= nums[j]
    //         if (pre < k) {
    //             count++
    //         } else {
    //             break
    //         }
    //     }
    // }
    // return count
    if (k <= 1) return 0
    let left = 0, right = 0
    let mul = 1, res = 0
    while (right < nums.length) {
        mul *= nums[right]
        while (mul >= k) {
            mul /= nums[left]
            left++
        }
        // 结果与窗口左右边界的联系
        res += right - left + 1
        right++
    }
    return res
};
1
1 + 2
+ 2
+ 3
numSubarrayProductLessThanK([10, 5, 2, 6], 100)