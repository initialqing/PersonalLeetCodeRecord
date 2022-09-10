/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
function swapPairs(head: ListNode | null): ListNode | null {
    const demoHead  = new ListNode(0);
    demoHead.next = head
    let cur = demoHead
    while(cur.next!==null && cur.next.next!==null) {
        let temp = cur.next // 记录临时节点
        let temp1 = cur.next.next.next // 记录临时节点
        cur.next = cur.next.next // 步骤一
        cur.next.next = temp //步骤二
        cur.next.next.next = temp1 //步骤三
        cur = cur.next.next // 迭代操作下一个节点
    }
    return demoHead.next
};
