/**
 * 
 * 前缀和+哈希表
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function (nums, k) {
    let preFixSum = 0, count = 0
    let map = { 0: 1 }
    for (let i = 0; i < nums.length; i++) {
        preFixSum += nums[i]
        if(map[preFixSum - k]) {
            count += map[preFixSum - k]
        }
        if(map[preFixSum]) {
            map[preFixSum]++
        }else {
            map[preFixSum] = 1
        }
    }
    return count
};