/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head) return null
    const judje = (head) => {
        let fast = head,slow = head
        while(fast && slow && slow.next && fast.next && fast.next.next) {
            fast = fast.next.next,slow = slow.next
            if(fast === slow) {
                return true
            }
        }
        return false
    }
    if(!judje(head)) return null
    let s = new Set()
    while(head) {
        if(s.has(head)) {
            return head
        }
        s.add(head)
        head = head.next
    }
};
