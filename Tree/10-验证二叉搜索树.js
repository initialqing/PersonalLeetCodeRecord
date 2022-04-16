const isValidBst = (root) => {
    // 递归的思路 限定节点的区间在low与high之间
    const helper = (node,low,high) => {
        if (node === null) {return true}
        if (node.val<=low||node.val>=high) {
            return false
        }
        return helper(node.left,low,node.val) && helper(node.right,node.val,high)
    }
    return helper(root,-Infinity,+Infinity)
}
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
 * @return {boolean}
 */
// 中序遍历思路
const isValidBST = function(root) {
    let res = []
    const midOrder = (node) => {
        if(node) {
            midOrder(node.left)
            res.push(node.val)
            midOrder(node.right)
        }
    }
    midOrder(root)
    // console.log(res)
    // let j = 1
    for (let i = 0; i < res.length; i++) {
        if (i===res.length-1) break
        if (res[i]>=res[i+1]) {
            return false
        }
    }
    return true
};