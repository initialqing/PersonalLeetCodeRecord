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
 * @return {TreeNode}
 */
// 第一种方法：递归实现
const invertTree = function(root) {
    if(root===null) return null
    let temp  = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
};
// 第二种方法：递归
const invertTree = function(root) {
    if(root===null) return root
    // let temp  = root.left
    // root.left = root.right
    // root.right = temp
    // invertTree(root.left)
    // invertTree(root.right)
    // return root
    invertTree(root.left)
    invertTree(root.right)
    const temp = root.left
    root.left = root.right
    root.right = temp
    return root
};
