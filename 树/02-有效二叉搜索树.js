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
let isValidBST = function(root) {
    return isValidBST(root,-Infinity,Infinity)
    function isValidBST(root,short,long) {
        if(root===null) return true
        if(root.val>=long||root.val<=short) return false
        return isValidBST(root.left,short,root.val) && isValidBST(root.right,root.val,long)
    }
};