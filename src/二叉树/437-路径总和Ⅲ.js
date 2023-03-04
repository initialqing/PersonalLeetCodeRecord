/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
// 递归函数，计算以root为根节点的路径和为targetSum的路径数
function count(root,targetSum) {
    if(!root) return 0
    let res = 0
    if(root.val === targetSum) {
        res++
    }
    // 减法操作不需要额外的sum变量，更加简单
    let left = count(root.left,targetSum - root.val)
    let right = count(root.right,targetSum - root.val)
    return left + right + res
}
var pathSum = function (root, targetSum) {
    if(!root) return 0
    let res = count(root,targetSum)
    res += pathSum(root.left,targetSum)
    res += pathSum(root.right,targetSum)
    return res
};