/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
    if(nums.length<4) return []
    let res = [],length = nums.length
    nums.sort((a,b) => {
        return a - b
    })
    // 优化思路
    // 四个数的和作为区间和
    let sum4 = nums[0] + nums[1] + nums[2] + nums[3]
    // 记录最大的三个数之和
    let max3 = nums[length-1] + nums[length-2] +  nums[length-3]
    for(let i = 0;i < length;i++) {
        // 当前枚举的这个数加上最大的三个数还比target小的话那么就跳过当前数
        if(nums[i] + max3 < target) {
            continue
        }
        if(sum4>target) {
            break
        }
        // 更新区间和，删除现有nums[i] 加入新的第四个数nums[4]
        if(i + 4 < length) {
            sum4 = sum4 - nums[i] + nums[i+4]
        }
        if(i && nums[i]===nums[i-1]) {
            continue
        }
        for(let j = i+1;j < length;j++) {
            if(j> i + 1 && nums[j]===nums[j-1]) {
                continue
            }
            let twoSum = nums[i] + nums[j]
            console.log(nums[i],nums[j])
            // 这段代码不能写是因为假如target<0那么这段代码就会失效
            // if(twoSum>target) {
            //     break
            // }
            let left = j+1
            let right = length-1
            while(left<right) {
                let tar = twoSum + nums[left] + nums[right]
                if(tar<target) {
                    left++
                }else if(tar>target) {
                    right--
                }else {
                    res.push([nums[i],nums[j],nums[left],nums[right]])
                    left++
                    right--
                    while(left<right && nums[left]===nums[left-1]) left++
                    while(left<right && nums[right]===nums[right+1]) right--
                }
            }
        }
    }
    return res
};
