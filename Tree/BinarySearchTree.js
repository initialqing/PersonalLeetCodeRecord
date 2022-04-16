class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class binarySearchTree {
    constructor() {
        this.root = null
        this.res_arr = []
    }

    // 创建二叉搜索树  传入一个节点，和一个新节点
    insertNode(node, newNode) {
        if (newNode.val < node.val) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // 传入数据以便于创建新节点
    insert(val) {
        // 创建新节点
        let node = new Node(val)
        if (this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    // 前序遍历 根 右 左
    preOrder(node) {
        if (node) {
            this.res_arr.push(node.val)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    // 中序遍历 左根右
    midOrder(node) {
        if (node) {
            this.midOrder(node.left)
            this.res_arr.push(node.val)
            this.midOrder(node.right)
        }
    }

    // 后序遍历 左右根
    postOrder(node) {
        if (node) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            this.res_arr.push(node.val)
        }
    }

    // 广度优先遍历
    levelOrder(node) {
        if (!node) return '这是空的树'
        let queue = []
        // let arr2 = []
        queue.push(node)
        /**
         * 下面为输出为二维数组的代码
         */
        // while (queue.length) {
        //     let n = queue.length
        //     let arr2 = []
        //     for (let i = 0; i < n; i++) {
        //         const node = queue.shift()
        //         arr2.push(node.val)
        //         if (node.left) queue.push(node.left)
        //         if (node.right) queue.push(node.right)
        //     }
        //     this.res_arr.push(arr2)
        // }
        while (queue.length) {
            let node = queue.shift();
            this.res_arr.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    // 清空
    init() {
        this.res_arr = []
    }
}

let tree = new binarySearchTree();
let arr = [11, 7, 15, 5, 9, 4, 6, 8, 10];
let level_arr = []; //存放层次遍历序列
arr.forEach(a => {
    tree.insert(a)
})
tree.midOrder(tree.root);
level_arr  = tree.res_arr
console.log(level_arr)
