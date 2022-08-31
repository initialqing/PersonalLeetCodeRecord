/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findTheWinner = function (n, k) {
    class ListNode {
        constructor(val, next) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }
    }
    let temp = null
    let head = null
    for (let i = 1; i <= n; i++) {
        let node = new ListNode(i)
        if (temp) {
            temp.next = node
        } else if (i === 1) {
            head = node
        }
        temp = node
        if (i === n) {
            temp.next = head
        }
    }
    console.log(head)
    const del = (node, n) => {
        if (node.val === node.next.val) {
            return node
        }
        // 这个n在不断的变化 删除的是第n个节点
        let x = k % n
        if (x === 0) {
            x = n
        }
        if (x === 1) {
            let nodeVal = node.val

            while (node.next.val !== nodeVal) {
                node = node.next
            }
            node.next = node.next.next
            node = node.next
            n--
            return del(node, n)
        }
        // 删除的第是x个节点就需要找到第x-1个节点
        while (x > 2) {
            node = node.next
            x--
        }
        node.next = node.next.next
        node = node.next
        n--
        return del(node, n)

    }
    return del(head, n).val
};
console.log(findTheWinner(6, 5))
