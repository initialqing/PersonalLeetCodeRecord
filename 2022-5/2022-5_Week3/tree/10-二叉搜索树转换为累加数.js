/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let pre = 0
    const helper = (node) => {
        if(!node) return null
        helper(node.right)
        node.val += pre
        pre = node.val
        helper(node.left)

    }
    helper(root)
    return root
};