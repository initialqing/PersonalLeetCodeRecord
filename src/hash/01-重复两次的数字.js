/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const ans = new Array()
    for(let i = 0; i < nums.length; i++) {
        const org = Math.abs(nums[i])
        if(nums[org - 1] > 0)
            nums[org - 1] *= -1
        else
            ans.push(org)
    }
    return ans
};
findDuplicates([4,3,2,7,8,2,3,1])
