/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function (root, targetSum) {
    if(!root) return []
    let arr = []
    let res = []
    const sumRange = (root, target) => {
        // console.log(root)
        arr.push(root.val)
        if (!root.left && !root.right) {
            let sum = 0
            arr.forEach(ele => {
                sum+=ele
            })
            if (sum===target) {
                let res1 = [...arr]
                res.push(res1)
            }
        }
        if (root.left)  sumRange(root.left,target)
        if (root.right) sumRange(root.right,target)
        console.log(arr)
        arr.pop()

    }
    sumRange(root,targetSum,arr,res)
    return res
};
