/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {

};/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
        let res = []
        let queue = []
        queue.push(root)
    while (queue.length) {
        let arr = []
        let n = queue.length
        for (let i = 0; i < n; i++) {
            let node = queue.shift()
            arr.push(node.val)
            for (const nodeElement of node.children) {
                queue.push(nodeElement)
            }
            /**
             下面这段代码是自己写的但是这么写会超时
             */
            // if (node.children) {
            //     queue.push(node.children)
            //     console.log(queue)
            //     queue = queue.flat()
            // }
        }
        res.push(arr)
    }
    return  res
};
/**
 * 比较好的方法 看的题解
 */
const tijie = (root) => {
    if (root === null) return [] // 去除根节点直接没有的情况
    const tar = [] // 存储最终的值
    let now = [root] // 当前遍历层级的所有节点
    while (now.length) { // 只要当前层级有节点就得遍历一次
        /**Array.map
         * map为创建数组的方法，回调函数为操作数组中的每个item元素
         */
        tar.push(now.map(item => item.val)) // 把当前层级的值放到最终结果中

        const next = [] // 存储下一级的节点
        /**
         * 可依次向 callback 函数传入三个参数：
         *
         * 1、数组当前项的值
         * 2、数组当前项的索引（操作索引）
         * 3、数组对象本身
         * 这个题目只传入了数组当前项的值
         */
        now.forEach(item => { // 把当前层级的 children 放到下一层级的节点中
            // 扩展运算符可以遍历每一项然后返回 [1,2,3]   ...[1,2,3] = 1 2 3
            if (item.children) next.push(...item.children)
        })
        now = next // 更新当前层级数据
    }
    return tar
}
