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
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if(!head) return
    // 辅助数组法
    let nodeArr:ListNode[] = []
    let curNode:ListNode | null = head
    while(curNode) {
        nodeArr.push(curNode)
        curNode = curNode.next
    }
    let node:ListNode = head
    let left = 0,right = nodeArr.length - 1
    let count = 0
    while(left <= right) {
        if(count % 2 === 0) {
            node.next = nodeArr[left++]
        }else {
            node.next = nodeArr[right--]
        }
        node = node.next
        count++
    }
    node.next = null
};
