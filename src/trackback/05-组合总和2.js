/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(nums, target) {
    nums.sort((a,b) => {return a-b})
    let res = [],temp = [],sum = 0,used = []
    const back = (index,sum) => {
        if(sum===target) {
            res.push(temp.slice())
            return
        }
        if(sum>target) {
            return
        }
        for(let i = index;i<nums.length;i++) {
            if(i>index && nums[i]===nums[i-1]  || sum+nums[i] > target ) {
                continue
            }
            used[i] = 1
            temp.push(nums[i])
            sum+=nums[i]
            back(i+1,sum)
            sum-=nums[i]
            temp.pop()
            used[i] = 0
        }
    }
    back(0,sum)
    return res
};
