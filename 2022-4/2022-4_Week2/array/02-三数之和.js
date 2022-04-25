/**
 * 思路：排序+双指针
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    if(nums.length<3) return []
    let n = nums.length
    let a = n>256 ? 256:n
    let resArr = new Array(a)
    nums.sort((a,b) => a-b)
    if(n<3 || nums[0]>0 || nums[n-1]<0) {
        return []
    }
    for(let i = 0;i<n-2;i++) {
        if(i && nums[i] === nums[i-1]) {
            continue
        }
        if(nums[i]>0) {
            break
        }
        let j = i+1
        let k = n-1
        while(j<k) {
            let tar = nums[i] + nums[j] + nums[k]
            if(tar> 0) {
                k--
            }else if(tar < 0) {
                j++
            }else {
                resArr.push([nums[i],nums[j],nums[k]])
                k--
                j++
                while(j<k&&nums[k]===nums[k+1]) k--
                while(j<k&&nums[j]===nums[j-1]) j++
            }
        }
    }
    return resArr
};
