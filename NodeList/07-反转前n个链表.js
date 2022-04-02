import {list} from "./生成链表.js";
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let successor = null
// 反转前n个链表
    const reverseN = (node,n) => {
        if(n===1) {
            successor = node.next
            return node
        }
        let newNode = reverseN(node.next,n-1)
        node.next.next = node
        node.next = successor
        return newNode
    }
    if(left===1) {
        return reverseN(head,right)
    }
    head.next = reverseBetween(head.next,left-1,right-1)
    return head

};