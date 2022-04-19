/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    /**
     * 当时以为js不能新建链表然后再新链表上操作，因为报出了内存溢出的错误，后来发现是后边的判断条件出现了错误
     * @type {ListNode}
     */
    // 创建新链表用于存放结果
    let newNode = new ListNode()
    let temp = newNode
    let carry = 0
    while (l1!==null||l2!==null) {
        let x = l1 === null ? 0:l1.val
        let y = l2 === null ? 0:l2.val
        let sum = x + y + carry
        /**
         * 注意点： sum/10 再js中不会自动向下取整 所以需要Math函数
         * @type {number}
         */
        carry = Math.floor(sum/10)
        sum = sum%10
        temp.next = new ListNode(sum)
        temp = temp.next
        /**
         * 这个判断条件为链表不为空
         */
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
        if (carry===1) {
            temp.next = new ListNode(carry)
        }
    }
    return newNode.next
};

