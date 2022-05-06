/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [],temp = []
    const backtracking  = (nums,x) => {
        res.push(temp.slice())
        if (x>=nums.length) {
            return
        }
        for (let i = x; i < nums.length; i++) {
            temp.push(nums[i])
            backtracking(nums,i+1)
            temp.pop()
        }
    }
    backtracking(nums,0)
    return  res
};
subsets([1,2,3])
