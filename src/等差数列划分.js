/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    if(nums.length<3) return 0
    let dp = new Array(nums.length)
    dp[0] = 0,dp[1] = 0
    for(let i = 2;i<nums.length;i++) {
        if(nums[i] === 2*nums[i-1]-nums[i-2]){
            dp[i] = dp[i-1] +1
        }else {
            dp[i] = 0
        }
    }
    let res = 0
    for(const s of dp) {
        res+=s
    }
    return res
};
console.log(numberOfArithmeticSlices([1,2,3,5,7,9]))