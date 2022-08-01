/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right
 *
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function(inorder, postorder) {
    if (!inorder.length&&!postorder.length) return null
    // 递归终止
    if (postorder.length===0) return null
    // 创建当前节点
    let nodeVal = postorder[postorder.length-1]
    let newNode = new TreeNode(nodeVal)
    // postOrder只有一个数据，返回当前节点
    if (postorder.length===1) return newNode
    let index = 0
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i]===nodeVal) {
            index = i
            break
        }
    }

    // 切割中序数组
    let leftInorder = inorder.slice(0,index)
    let rightInorder = inorder.slice(index+1)
    // 切割后序数组
    // let leftPostOrder = postorder.slice(0,index)
    postorder.pop()
    let leftPostOrder = postorder.slice(0,index)
    let rightPostOrder = postorder.slice(index)

    // 递归
    newNode.left = buildTree(leftInorder,leftPostOrder)
    newNode.right = buildTree(rightInorder,rightPostOrder)
    return newNode
};
