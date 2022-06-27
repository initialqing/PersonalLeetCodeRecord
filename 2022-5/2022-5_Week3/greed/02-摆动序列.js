/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function(nums) {
    // cur 记录当前值与后一个值的差值 ，pre前一个值和后一个值的差值，二者需要符号相反才能进行操作
    let cur = 0,pre = 0,count = 1
    for(let i = 0;i<nums.length-1;i++) {
        // 计算当前的插值
        cur = nums[i+1] - nums[i]
        // 满足条件计算峰值
        if((cur > 0 && pre <= 0) || (cur < 0 && pre >=0)){
            count++
            pre = cur
        }
    }
    return count
};
