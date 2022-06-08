/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * /层序遍历
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(!root2) return root1
    if(!root1) return root2
    let queue = []
    queue.push(root1,root2)
    while(queue.length) {
        let node1 = queue.shift()
        let node2 = queue.shift()
        node1.val +=node2.val

        if(node2.left&&node1.left) {
            queue.push(node1.left)
            queue.push(node2.left)
        }
        if(node1.right&&node2.right) {
            queue.push(node1.right)
            queue.push(node2.right)
        }
        // root1不为空root2为空则不需要操作
        // root1 为空需要连接上上root2
        if(!node1.left&&node2.left) {
            node1.left = node2.left
        }
        if(!node1.right&&node2.right) {
            node1.right = node2.right
        }

    }
    return root1

};