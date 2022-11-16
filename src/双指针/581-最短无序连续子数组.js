/**
 * @param {number[]} nums
 * @return {number}
 */

// 另一个相同的题目在单调栈文件夹
 var findUnsortedSubarray = function(nums) {
    let left = 0,right = nums.length
    const arr = [...nums]
    
    arr.sort((a,b) => a-b)
    
    
    while(left < right && arr[left] === nums[left]) {
        left++
    }
    while(left <= right && arr[right] === nums[right]) {
        right--
    }
    return right - left + 1
};