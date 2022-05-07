/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(nums, target) {
    nums.sort((a,b) => a - b)
    let res = [],temp = [],sum = 0
    const back = (nums,sum,j) => {
        if (sum>target) {
            return
        }
        if (sum === target) {
            res.push(temp.slice());
            return;
        }
        for (let i = j;i<nums.length;i++) {
            if (nums[i] + sum >target) continue
            temp.push(nums[i])
            sum+=nums[i]

            back(nums,sum,i)
            sum-=nums[i]
            temp.pop()
        }
    }
    back(nums,sum,0)
    return  res
};
combinationSum([2,3,6,7],7)
