/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let right = nums.length-1
    const helper = (nums,left,right) => {
        if(left>right) return null
        let mid = Math.floor(left + (right-left)/2)
        let node = new TreeNode(nums[mid])
        node.left = helper(nums,left,mid-1)
        node.right = helper(nums,mid+1,right)
        return node
    }
    return helper(nums,0,right)
};