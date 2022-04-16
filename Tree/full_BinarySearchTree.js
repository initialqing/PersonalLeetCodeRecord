class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null
        this.res_arr = []
    }
    // 插入节点
    insertNodeByFather(node,newNode){
        // 比较子节点的数值的大小
        if (newNode.val<node.val) {
            // 看左子节点是否为空
            if (!node.left){
                node.left = newNode
            }else {
                // 左子节点的数值不为空需要继续查找
                this.insertNodeByFather(node.left,newNode)
            }
        }else {
            // 新节点的数值比较大需要往右边插入
            if (!node.right) {
                node.right = newNode
            }else {
                // 递归向右边查找
                this.insertNodeByFather(node.right,newNode)
            }
        }
    }
    // insert 插入方法
    insert(val){
        let node = new Node(val)
        if (this.root===null) {
            this.root = node
        }else {
            this.insertNodeByFather(this.root,node)
        }
    }
    // 遍历的方法 // 前序遍历
    preOrder(node){
        if (node) {
            this.res_arr.push(node.val)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
    // 中序遍历
    midOrder(node){
        if (node){
            this.midOrder(node.left)
            this.res_arr.push(node.val)
            this.midOrder(node.right)
        }
    }
    // 后序遍历
    postOrder(node){
        if (node){
            this.postOrder(node.left)
            this.postOrder(node.right)
            this.res_arr.push(node.val)
        }
    }
    // 广度优先遍历
    levelOrderTraversal(node){
        if (!node){
            throw new Error('Empty Tree')
        }
        let que = []

        que.push(node)
        while (que.length!==0) {
            let res = []
            let n = que.length
            for (let i = 0; i < n; i++) {
                const node = que.shift()
                res.push(node.val)
                if (node.left) {
                    // res.push(node.left)
                    que.push(node.left)
                }
                if (node.right) que.push(node.right)
            }
            this.res_arr.push(res)
            // // 删除que的第一个元素 并返回这个元素的值
            // node = que.shift()
            // // res.push(node.val)
            // this.res_arr.push(node.val)
            // // this.res_arr.push(node.val)
            // if (node.left) {
            //     // res.push(node.left)
            //     que.push(node.left)
            // }
            // if (node.right) que.push(node.right)
        }
    }
    // 清楚存放的树节点
    init(){
        this.res_arr = []
    }
    // 搜索最小值 传入一个根节点
    minNode(node){
        if (!node) return null
        while (node.left){
            node = node.left
        }
        return node.val
    }
    maxNode(node){
        if (!node) return null
        while (node.right){
            node = node.right
        }
        return node.val
    }
}
// 测试代码
let tree = new BinarySearchTree()
let arr = [11,7,15,5,9,4,6,8,10]
arr.forEach(a => {
    tree.insert(a)
})
let pre_arr = []
let mid_arr = []
let post_arr = []
let level_arr = []
tree.preOrder(tree.root)
pre_arr = tree.res_arr
console.log('前序遍历',pre_arr)

tree.init()
tree.midOrder(tree.root)
mid_arr = tree.res_arr
console.log('中序遍历',mid_arr)

tree.init()
tree.postOrder(tree.root)
post_arr = tree.res_arr
console.log('后序遍历',post_arr)

tree.init()
tree.levelOrderTraversal(tree.root)
level_arr = tree.res_arr
console.log('层级遍历',level_arr)

console.log('最大值',tree.maxNode(tree.root))
console.log('最小值',tree.minNode(tree.root))