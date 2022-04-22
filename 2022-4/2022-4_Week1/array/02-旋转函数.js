/**
 * 暴力解法失败了！
 * @param {number[]} nums
 * @return {number}
 */
const maxRotateFunction = function(nums) {
    let maxVal = -Infinity
    for (let i = 0; i < nums.length-1; i++) {
        let sum = 0
        nums.unshift(nums.pop())
        for (let j = 0; j < nums.length; j++) {
            sum+= arr[j]*j
        }
        maxVal = Math.max(maxVal,sum)
    }
    return maxVal
};
/**
 * 寻找迭代关系
 */
const maxRotateFunction = (nums) => {
    let f = 0
    let numSum = nums.reduce((pre,cur) => {
        return pre+cur
    },0)
    for (let i = 0; i < nums.length; i++) {
        f+=nums[i]*i
    }
    let maxVal = f
    for (let i = nums.length-1; i >0; i--) {
        f += numSum - nums.length * nums[i]
        maxVal = Math.max(f,maxVal)
    }
    return maxVal
}