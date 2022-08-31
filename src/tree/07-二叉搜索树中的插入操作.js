/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val)
    if(root.val>val) {
        if(!root.left) {
            root.left = new TreeNode(val)
        }else {
            insertIntoBST(root.left,val)
        }
    }else {
        if(!root.right) {
            root.right = new TreeNode(val)
        }else {
            insertIntoBST(root.right,val)
        }
    }
    return root
}