/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function balanceBST(root: TreeNode | null): TreeNode | null {
    const tempArr: number[] = []
    // 将二叉搜索树转为有序数组
    const midOrder = (root: TreeNode | null) => {
        if (!root) {
            return
        }
        midOrder(root.left)
        tempArr.push(root.val)
        midOrder(root.right)

    }
    // 将有序数组转为二叉搜索树
    const getTree = (nums: number[], left: number, right: number): TreeNode | null => {
        if (left > right) {
            return null
        }
        const mid = Math.floor(left + (right - left) / 2)
        const node = new TreeNode(nums[mid])
        node.left = getTree(nums, left, mid - 1)
        node.right = getTree(nums, mid + 1, right)
        return node
    }
    midOrder(root)
    return getTree(tempArr, 0, tempArr.length - 1)
};

