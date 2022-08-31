/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function(nums) {
    let res = [],temp = []
    function backTracking(startIndex) {
        if(temp.length>1){
            res.push(temp.slice())
        }
        let used = new Array(201).fill(false)
        for(let i = startIndex;i<nums.length;i++) {
            if((nums[i]<temp[temp.length-1] && temp.length>0) || used[nums[i] + 100]) {
                continue
            }
            used[nums[i] + 100] = true
            temp.push(nums[i])
            backTracking(i + 1)
            temp.pop()
        }
    }
    backTracking(0)
    return res
};