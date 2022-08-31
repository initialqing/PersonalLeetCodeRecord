/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length<3) return []
    let temp = []
    nums.sort((a,b) => a-b)
    // 最小值大于0，或者最大值小于0都可以直接 return []
    for(let i = 0;i<nums.length-2;i++) {
        if(i&&nums[i]===nums[i-1]) {continue}
        if(nums[i]>0) break
        let left = i + 1
        let right = nums.length - 1
        while(left<right) {
            let tar = nums[i] + nums[left] + nums[right]
            if(tar>0) {
                right--
            }else if(tar<0) {
                left++
            }else {
                temp.push([nums[i],nums[right],nums[left]])
                left++
                right--
                while(left<right&&nums[left]===nums[left-1]) left++
                while(left<right&&nums[right]===nums[right+1]) right--
            }
        }
    }
    return temp
};
