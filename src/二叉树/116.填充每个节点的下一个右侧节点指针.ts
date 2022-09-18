class TNode {
    val: number
    left: TNode | null
    right: TNode | null
    next: TNode | null
    constructor(val?: number, left?: TNode, right?: TNode, next?: TNode) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}


// 层序遍历
function connectLevelOrder(root: TNode | null): TNode | null {
    if (!root) return null
    const queue: TNode[] = []
    queue.push(root)

    while (queue.length > 0) {
        const length = queue.length
        for (let i = 0; i < length; i++) {
            const node: TNode = queue.shift()!
            if (i === length - 1) {
                node.next = null
            } else {
                node.next = queue[0]
            }
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return root
};

// 递归法
function connectRecur(root: TNode | null) {
    if(!root) {
        return
    }
    if(root.left) {
        root.left.next = root.right
    }
    if(root.right) {
        if(root.next) {
            root.right.next = root.next.left
        }else {
            root.right.next = null
        }
    }
}
