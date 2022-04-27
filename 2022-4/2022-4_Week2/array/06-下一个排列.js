/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function (nums) {
    let tempIndex = 0
    let flag = false
    for (let index = nums.length-1; index >=1; index--) {
        if(nums[index]>nums[index-1]) {
            flag = true
            tempIndex = index-1
            break
        }
    }
    if(!flag) return nums.sort((a,b) => a-b)
    for (let index = nums.length-1; index >=0; index--) {
        if (nums[index]>nums[tempIndex]) {
            let temp = nums[index]
            nums[index] = nums[tempIndex]
            nums[tempIndex] = temp
            break
        }
    }
    // tempIndex后边的数组需要排序
    let left = tempIndex+1
    let right = nums.length-1
    while(left<right) {
        [nums[left],nums[right]] = [nums[right],nums[left]]
        right--
        left++
    }
};
nextPermutation([1,3,2])