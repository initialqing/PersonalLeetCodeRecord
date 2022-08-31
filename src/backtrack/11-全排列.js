/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    let res = [],temp = []
    const backTracking = (visited) => {
        if (temp.length===nums.length) {
            res.push(temp.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue
            visited[i]  = true
            temp.push(nums[i])
            backTracking(visited)
            temp.pop()
            visited[i] = false
        }
    }
    backTracking([])
    return  res
};