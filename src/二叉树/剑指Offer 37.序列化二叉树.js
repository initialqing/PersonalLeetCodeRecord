function serialize(root) {
    const res = []
    const queue = [root]
    while (queue.length) {
        const length = queue.length
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            if (node === null) {
                res.push(node)
                continue
            }
            queue.push(node.left)
            queue.push(node.right)
        }
    }
    return res.join(',')
}

function deserialize(data) {
    let dataArr = data.split(',')
    const root = new TreeNode(Number(dataArr[0]))
    const queue = [root]
    for (let i = 1; i < dataArr.length;) {
        const parentNode = queue.shift()
        const leftNode = dataArr[i++]
        if (leftNode !== 'null') {
            const node = new TreeNode(Number(leftNode))
            parentNode.left = node
            queue.push(node)
        } else {
            parentNode.left = null
        }
        const rightNode = dataArr[i++]
        if (rightNode !== 'null') {
            const node = new TreeNode(Number(rightNode))
            parentNode.right = node
            queue.push(node)
        } else {
            parentNode.right = null
        }
    }
    return root
}