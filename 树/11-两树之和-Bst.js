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
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function(root, k) {
    if(root.left===null&&root.right===null) {
        return false
    }
    let res = []
    const midOrder = (node) => {
        if (node) {
            midOrder(node.left)
            res.push(node.val)
            midOrder(node.right)
        }
    }
    midOrder(root)
    let m = new Map()
    for (let i = 0; i < res.length; i++) {
        if (m.has(res[i])) {
            m.set(res[i],m.get(res[i])+1)
        }else {
            m.set(res[i],1)
        }
    }
    for (let i = 0; i < res.length; i++) {
        let n = k-res[i]
        if (m.has(n)) {
            let y = n * 2
            console.log(y)
            if(y!==k){
                return true
            }
        }
    }
    return false
};