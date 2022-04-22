/**
 * 解法1:迭代方式实现
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
    while (root) {
        if (p.val < root.val && q.val < root.val) {
            root = root.left
        } else if (q.val > root.val && p.val > root.val) {
            root = root.right
        } else {
            break
        }
    }
    return root
};
/**
 * 解法2：递归实现
 * @param root
 * @param p
 * @param q
 * @return {*}
 */
const lowestCommonAncestor = function (root, p, q) {
  if (root.val>p.val&&root.val>q.val) {
      return lowestCommonAncestor(root.left,p,q)
  } else if (root.val<p.val&&root.val<q.val){
      return lowestCommonAncestor(root.right,p,q)
  }
  return root
};