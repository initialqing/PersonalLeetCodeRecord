/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {

    if (!preorder.length && !inorder.length) return null

    if (!preorder.length) return null

    let val = preorder.shift()

    let newNode = new TreeNode(val)
    // if (preorder.length === 1) return newNode
    let index = inorder.indexOf(val)

    // 分割前序数组
    let leftPreOrder = preorder.slice(0,index)
    let rightPreOrder = preorder.slice(index)
    // 分割中序数组
    let leftInorder = inorder.slice(0,index)
    let rightInorder = inorder.slice(index+1)

    newNode.left = buildTree(leftPreOrder,leftInorder)
    newNode.right = buildTree(rightPreOrder,rightInorder)
    return newNode
};
