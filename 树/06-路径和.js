/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// 该学习一下BFS和DFS两种方法
const hasPathSum = function (root, targetSum) {
    if (!root) return false
    // if (root.val === targetSum) return true
    let queue = []
    let res = []
    queue.push(root)
    res.push(root.val)
    // 进入bfs
    while (queue.length) {
        let temp = res.pop()
        let top = queue.pop()
        if (top.left === null && top.right === null) {
            if (temp === targetSum) {
                return true
            }
        }
        if (top.left) {
            queue.push(top.left)
            res.push(temp + top.left.val)
        }
        if (top.right) {
            queue.push(top.right)
            res.push(temp + top.right.val)
        }
    }
    return false
};
/**

if(root === null) {
    return false
}
// 搜到叶子节点，则判断当前节点值是否等于目标值
if(root.left === null && root.right === null) {
    return root.val === targetSum
}
// 还没搜到叶子节点，则进行 目标值-当前节点值，并继续往下搜
return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)


 *
 */
