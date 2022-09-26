/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return root
    if (root.val === key) {
        if (!root.left) {
            return root.right
        }
        if (!root.right) {
            return root.left
        }
        let cur = root.right
        while (cur.left) {
            cur = cur.left
        }
        cur.left = root.left
        root = root.right
        return root
    }
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    }
    if (root.val < key) {
        root.right = deleteNode(root.right, key)
    }
    return root
};