/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//双链表
let reverseList = function(head) {
    let newListNode = null
    while(head!==null){
        let temp = head.next
        head.next = newListNode
        newListNode = head
        head = temp
        //    head = head.next
    }
    return newListNode

};
