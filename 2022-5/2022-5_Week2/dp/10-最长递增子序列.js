/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
    let arr =new Array(nums.length).fill(1)
    let res = 1
    // let temp = nums[0]
    for(let i = 1;i<nums.length;i++) {
        for(let j = 0;j<i;j++) {
            if(nums[i]>nums[j]){ arr[i] = Math.max(arr[i],arr[j]+1)
            }
        }
        res = Math.max(res, arr[i]);
    }
    console.log(arr)
    return res
};
