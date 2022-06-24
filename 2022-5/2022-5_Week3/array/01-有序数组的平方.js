/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    let left = 0,right = nums.length - 1,index = right
    let res = new Array(nums.length).fill(0)
    while(left <= right) {
        if(nums[left] * nums[left] < nums[right] * nums[right]){
            res[index] = Math.pow(nums[right],2)
            right--
            index--
        }else{
            res[index] = Math.pow(nums[left],2)
            left++
            index--
        }
    }
    return res
};
