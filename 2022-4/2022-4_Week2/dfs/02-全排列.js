/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    let res = [],temp = [],visited = []
    const dfs = (arr,vis) => {
        if (temp.length===nums.length) {
            // 传入temp数组的浅拷贝，假如直接传入temp，后边的回溯过程会改变temp的数值，因为temp的地址值是不变的在原来地址修改数组元素的值会改变res。
            res.push([...temp])
            return
        }
        for (let i = 0; i < arr.length; i++) {
            if (vis[i]) continue
            temp.push(arr[i])
            vis[i] = true
            dfs(arr,vis)
            // 回溯，将temp的数值弹出供后边遍历方便
            temp.pop()
            vis[i] = false
        }
    }
    dfs(nums,visited)
    return res
};
permute([1,2,3])
