/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let length = nums.length,res = []

    for(const ele of nums) {
        const x = (ele - 1) % length
        nums[x] += length 
    }

    for(let i =0;i<nums.length;i++) {
        if(nums[i] <= length) {
            res.push(i+1)
        }
    }

    return res
};