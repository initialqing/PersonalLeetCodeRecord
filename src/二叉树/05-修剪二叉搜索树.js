/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    if(!root) return null
    if(root.val < low) {
        let right = trimBST(root.right,low,high)
        return right
    }
    if(root.val > high) {
        let left = trimBST(root.left,low,high)
        return left
    }
    root.left = trimBST(root.left,low,high)
    root.right = trimBST(root.right,low,high)
    return root
};