/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
    let res = [],sum = 0,temp = [],used = new Array(candidates.length).fill(false)
    // 排序相同的元素才会在一起
    candidates.sort()
    const helper = (candidates,start,used) => {
        if(sum===target) {
            res.push([...temp])
            return
        }
        for(let i=start;i<candidates.length;i++) {
            // if(i>0 && candidates[i]===candidates[i-1]&&used[i-1] === false)        {
            //     continue
            // }
            // 去重
            if(i > start && candidates[i]===candidates[i-1]) {
                continue
            }
            const n = candidates[i]
            // 剪枝当前层的总和已经大于target，所以不用进入下一层递归
            if(n+sum>target) continue
            used[i] = true
            sum+=candidates[i]
            temp.push(candidates[i])
            // 一个集合中的数据数据不能重复选取 i+1
            helper(candidates,i+1,used)
            used[i] = false
            sum-=candidates[i]
            temp.pop()

        }
    }
    helper(candidates,0,used)
    return res
};