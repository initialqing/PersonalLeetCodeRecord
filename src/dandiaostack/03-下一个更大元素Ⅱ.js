/**
 * @param {number[]} nums
 * @return {number[]}
 * 两个数组扩充成一个数组，然后用单调栈的方法求解
 */
const nextGreaterElements1 = function(nums) {
    let ans = new Array(nums.length*2).fill(-1)
    const len = nums.length
    nums = [...nums,...nums]
    // console.log(nums)
    let stack = [0]
    for(let i = 0;i<nums.length;i++) {
        const top = stack[stack.length-1]
        if(nums[i] <= nums[top]) {
            stack.push(i)
        }else {
            console.log(nums[stack[stack.length-1]], nums[i])
            while(stack.length && nums[i] > nums[stack[stack.length-1]]) {
                const top = stack.pop()
                ans[top] = nums[i]
            }
            stack.push(i)
        }
    }
    ans.length = len
    return ans
};
/**
 * @param {number[]} nums
 * @return {number[]}
 * 去掉一些无用的操作，直接一次遍历即可
 */
const nextGreaterElements2 = function(nums) {
    let ans = new Array(nums.length*2).fill(-1)
    const len = nums.length

    let stack = [0]
    for(let i = 0;i<nums.length * 2;i++) {
        while(stack.length && nums[i % nums.length] > nums[stack[stack.length-1]]) {
            const top = stack.pop()
            ans[top] = nums[i % nums.length]
        }
        // 压入对应位置的索引
        stack.push(i % nums.length)
    }

    ans.length = len
    return ans
};
