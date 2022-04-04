const maxDepth = (root) => {
    if (root===null) return 0
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    let max = left
    if (max<right) {
        max = right
    }
    return max+1
}