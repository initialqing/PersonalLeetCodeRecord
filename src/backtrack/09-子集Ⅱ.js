/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function(nums) {
    // 遍历树所有可能的节点
    let res = [],temp = []
    // 需要排序让重复的元素都挨在一起
    nums.sort((a,b) =>  a-b)
    const backTrack = (nums,start) => {
        res.push([...temp])

        for (let i = start; i < nums.length; i++) {
            if(i > start && nums[i]===nums[i-1]) {
                continue
            }
            temp.push(nums[i])
            backTrack(nums,i+1)
            temp.pop()
        }
    }
    backTrack(nums,0)
    return res
};