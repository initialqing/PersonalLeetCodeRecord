const mirror = (root) => {
    if (root === null) return true
    const isMirror = (left, right) => {
        if (left === null && right === null) return true
        if (left === null || right === null || left.val !== right.val) return false
        return isMirror(left.left, right.right) && isMirror(left.right, right.left)
    }
    return isMirror(root.left, root.right)
}