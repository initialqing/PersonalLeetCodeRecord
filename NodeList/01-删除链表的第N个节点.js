/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
    if(!head.next) return null
    let newHead = head
    p = head
    let count = 1
    while(head.next!==null) {
        count++
        head=head.next
    }
    if(count===n){
        return p.next
    }
    let cou = count-n-1
    for(let i=0;i<cou;i++){
        p=p.next
    }
    p.next = p.next.next
    return newHead
};
