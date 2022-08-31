/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===0) return 0
    if(nums.length===1) return nums[0]
    const res1 = robRange(nums,0,nums.length-2)
    const res2 = robRange(nums,1,nums.length-1)
    return res1>res2? res1:res2
};
const robRange = (nums,start,end) =>{
    if(start===end) {
        return nums[start]
    }
    let dp = new Array(nums.length).fill(0)
    dp[start] = nums[start]
    dp[start+1] = nums[start+1]>nums[start] ? nums[start+1]:nums[start]
    for(let i = start+2;i<=end;i++) {
        dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
    }
    return dp[end]
}
