/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    if(nums.length===1) return true
    let cover = 0
    for(let i = 0;i<=cover;i++) {
        cover = Math.max(nums[i]+i,cover)
        if(cover >= nums.length-1) return true
    }
    return false
};
