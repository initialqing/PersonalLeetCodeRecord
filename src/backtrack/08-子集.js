/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    let res = [],temp = []
    const helper = (startIndex) => {
        res.push(temp.slice())
        // res.push([...temp])
        // 到了叶子节点
        if (startIndex>=nums.length) {
            return
        }
        for (let i = startIndex; i < nums.length; i++) {
            temp.push(nums[i])
            helper(i+1)
            temp.pop()
        }
    }
    helper(0)
    return res
};