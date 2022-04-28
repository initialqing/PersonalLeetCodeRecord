/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function(nums) {
    // let res = []
    // for(let i = 0;i<nums.length;i++) {
    //     if(nums[i]%2===0) {
    //         res.unshift(nums[i])
    //     }else {
    //         res.push(nums[i])
    //     }
    // }
    // return res
    let left = 0
    let right  = nums.length-1
    while(left<right){
        if(nums[left]%2!==0 && nums[right]%2===0) {
            [nums[left++],nums[right--]] = [nums[right],nums[left]]
        }else if(nums[left]%2===0&&nums[right]%2===0) {
            left++
        }else if(nums[left]%2!==0&&nums[right]%2!==0){
            right--
        }else {
            left++
            right--
        }
    }
    return nums
};