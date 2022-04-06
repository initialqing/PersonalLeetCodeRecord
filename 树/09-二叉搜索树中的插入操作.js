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
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function (root, val) {
    let temp = root
    return insert(temp,val)
function insert(temp,val) {
    let treeNode = new TreeNode(val);
    if (temp.val > val) {
        if (temp.left === null) {
            temp.left = treeNode
        } else {
            insertIntoBST(root.left, val)
        }
    } else {
        if (temp.right === null) {
            temp.right = treeNode
        } else {
            insertIntoBST(temp.right, val)
        }
    }
    return root
}
};
