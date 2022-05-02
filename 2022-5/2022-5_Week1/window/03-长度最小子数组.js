/**
 *
 * 解法1：直接解
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(target, nums) {
    // let res = +Infinity
    // for(let i = 0;i<nums.length;i++) {
    //     let temp = 0
    //     let count = 1
    //     for(let j = i;j<nums.length;j++) {
    //         temp += nums[j]
    //         if(temp<target) {
    //             count++
    //         }else {
    //             res = Math.min(res,count)
    //         }
    //     }
    // }
    // if(res===+Infinity) return 0
    // return res
};

/**
 * 解法2：滑动窗口
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function(target, nums) {
    let res = +Infinity,left = 0,right = 0,sum = 0
    while (right<nums.length){
        sum += nums[right]
        while(sum>=target){
            res = Math.min(res,right-left+1)
            sum-=nums[left]
            left++
            if(sum<target) {
                break
            }
        }
        right++
    }
    if(res===+Infinity) return 0
    return res
};