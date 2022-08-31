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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // 检查一个树和另外一个树是否相同
    const order = (res,root) => {
        if(!res&&!root) {
            return true
        }
        if(res===null||root===null||res.val!==root.val) {
            return false
        }
        return order(res.left,root.left) && order(res.right,root.right)
    }
    // 应该是遍历这个root树 每到一个节点就判断是否和subroot相同
    const bianli = (root,subRoot) => {
        if(root===null) {
            return false
        }
        // 比较的逻辑+dfs深入的逻辑(left和right两个节点)
        return order(root,subRoot) || bianli(root.left,subRoot) || bianli(root.right,subRoot)
    }

    return bianli(root,subRoot)
};
