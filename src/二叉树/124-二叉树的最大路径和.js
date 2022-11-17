
/**
 * 
 * @param {root} root 
 * @returns 
 */
var maxPathSum = function (root) {
    let max = -Infinity
    function dfs(root) {
        if (root == null) {
            return 0;
        }
        //计算左边分支最大值，左边分支如果为负数还不如不选择
        let leftMax = Math.max(0, dfs(root.left));
        //计算右边分支最大值，右边分支如果为负数还不如不选择
        let rightMax = Math.max(0, dfs(root.right));
        //left->root->right 作为路径与历史最大值做比较
        max = Math.max(max, root.val + leftMax + rightMax);
        // 返回经过root的单边最大分支给上游
        return root.val + Math.max(leftMax, rightMax)
    }
    dfs(root)
    return max
};

var maxPathSum = function (root) {
    let max = -Infinity
    function dfs(root) {
        if (root == null) {
            return -Infinity;
        }
        let leftMax = dfs(root.left)
        let rightMax = dfs(root.right)

        max = Math.max(max, root.val + leftMax + rightMax,leftMax,rightMax);
        console.log(max)

        return Math.max(leftMax + root.val, rightMax + root.val,root.val)
    }
   let res= dfs(root)
    return Math.max(max,res)
};