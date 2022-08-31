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
 * @return {number}
 */
const minCameraCover = function(root) {
    // 只有一个节点
    if(!root.left && !root.right) return 1
    // 0本节点无覆盖 1 本节点有摄像头 2 本节点有覆盖
    let res = 0
    const helper = (node) => {
        // 遇到空节点,返回2
        if(!node) {
            return 2
        }
        // 后序遍历
        let left = helper(node.left)
        let right = helper(node.right)
        // 回溯阶段处理递归的返回值
        if(left===2 && right===2) {
            return 0
        }
        // 这里有个细节，需要先判断是否左右节点是否有无覆盖的,若有则摄像头的数量++,后面再判断自己的子节点是否有摄像头。
        if(left === 0 || right ===0) {
            res++
            return 1
        }
        if(left === 1 || right === 1) {
            return 2
        }

        return -1
    }
    let temp = helper(root)
    if(temp===0) {
        res++
    }

    return res
};