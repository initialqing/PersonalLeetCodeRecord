/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    let count = 0
    for(let i=0;i<nums.length;i++) {
        if(nums[i]===val) {
            nums[i] = 0
        }else{
            count++
        }
    }
    nums.sort((a,b) => b-a)
    return count
};
