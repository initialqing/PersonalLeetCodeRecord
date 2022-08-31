/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestSumAfterKNegations = function(nums, k) {
    // 绝对值大的负数变为正数 然后k--，绝对值小的整数变为负数
    const cmp = (numa,numb) => {
        return Math.abs(numb) - Math.abs(numa)
    }
    // 将数据按照绝对值大小排序
    nums.sort(cmp)
    console.log(nums)

    for(let i = 0;i<nums.length;i++) {
        // 遇到负数将负数变为整数
        if(nums[i]<0 && k > 0) {
            nums[i]*=-1
            k--
        }
    }
    // 将负数都变为正数之后还存在k可以变化,k为偶数直接不管，为奇数就将最后一个变化即可
    if(k>0 && k % 2===1) {
        nums[nums.length-1]*=-1
    }
    return nums.reduce((a,b) => {
        return a+b
    })
};
