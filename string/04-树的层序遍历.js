let levelOrder = (root) => {
    // 返回值约定好说返回二维数组，实际上为空树时还是得已[]返回?
    if(root == null) return [];
    const queue = [];
    const res = [];

    queue.push(root);
    while (queue.length) {
        // 使用arr添加这一层的元素
        const arr = [];
        // 记录当前值的节点数量,后续操作出入队数量会变化
        const n = queue.length;
        for(let i = 0; i < n; i++){
            const node = queue.shift();
            arr.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(arr);
    }
    return res;

}
console.log(levelOrder())
