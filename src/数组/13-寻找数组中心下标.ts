/**
 * 1、先求出数组的总和。
 * 2、遍历数组并且比较数组中左半边的数字之和与数组右半边的数组之和
 * @param nums
 */
function pivotIndex(nums: number[]): number {
    if(nums.length===1) return 0
    const sum = nums.reduce((a,b) => {
        return a + b
    },0)

    let temp:number = 0,right:number = 0
    for(let i = 0;i<nums.length;i++) {
        temp += nums[i-1] || 0;
        right = sum - temp - nums[i]

        if(right===temp) {
            return i
        }
    }
    return -1
};
