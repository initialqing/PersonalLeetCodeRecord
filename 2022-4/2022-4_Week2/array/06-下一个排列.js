/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
    let flag = false
    for (let i = nums.length - 1; i >= 1; i--) {
        if (nums[i] > nums[i - 1]) {
            flag = true
            let temp = nums[i]
            nums[i] = nums[i - 1]
            nums[i - 1] = temp
            break
        }
    }
    if (!flag) {
        nums.sort((a,b) => a-b)
    }
};
nextPermutation([1,3,2])