/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    if (!nums.length) return -1
    let left = 0
    let right = nums.length - 1
    let mid
    while (left <= right) {
        // >> 1 位运算代替 除2 取整 操作
        // 为什么不写成 mid = (left+right)/2 ,因为考虑到left+right的溢出边界情况
        mid = left + Math.floor((right - left) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                // 从中间向左边搜索
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};
console.log(search([4,5,6,7,0,1,2],0))