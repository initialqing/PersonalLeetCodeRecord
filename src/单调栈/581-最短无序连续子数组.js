/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/solution/jsshua-ti-mian-shi-ti-jie-by-distracted-jq3kj/
 var findUnsortedSubarray = function(nums) {
    // 单调栈
    let stack = [],max = -Infinity
    let start = Infinity,end = -1
    for(let i = 0;i<nums.length;i++) {
        while(stack.length && nums[stack[stack.length-1]] > nums[i]) {
            max = Math.max(max,nums[stack[stack.length-1]])
            const top = stack.pop()
            top < start && (start = top)
        }
        if(nums[i] < max) {
            end = i
        }
        stack.push(i)
    }
    if(start > end) return 0
    return end - start + 1
};