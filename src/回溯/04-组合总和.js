/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    let res = [],temp = [],sum = 0
    const helper = (candidates,start) => {
        if(sum>target) return
        if(sum===target) {
            res.push([...temp])
            return
        }
        for(let i = start;i<candidates.length;i++) {
            sum+=candidates[i]
            temp.push(candidates[i])
            // 表示这个i可以重复选取
            helper(candidates,i)
            sum-=candidates[i]
            temp.pop()
        }
    }
    helper(candidates,0)
    return res
};