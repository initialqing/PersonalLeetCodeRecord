/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
    let res = [],temp = [],used = []
    nums.sort((a,b) => a-b)
    const back = (nums,used) => {

        if(temp.length===nums.length) {
            res.push(temp.slice())
            return
        }
        for(let i = 0;i<nums.length;i++) {
            if(used[i]===1||i > 0 && nums[i]===nums[i-1]&&used[i-1] === 0) {
                continue
            }

            // if(!used[i]) {
            used[i] = 1
            temp.push(nums[i])
            back(nums,used)
            temp.pop()
            used[i] = 0
            // }
        }
    }
    back(nums,used)
    return res
};
