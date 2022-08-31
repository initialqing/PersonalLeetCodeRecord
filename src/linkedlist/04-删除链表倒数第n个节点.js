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
var removeNthFromEnd = function(head, n) {
    if(!head.next) {
        return null
    }
    let newHead = new ListNode(0,head)
    if(n === 1) {
        while(head.next.next) {
            head = head.next
        }
        head.next = null
        return newHead.next
    }
    const reverse = (head) => {
        let temp = head,newHead = null
        while(temp) {
            let node = temp.next
            temp.next = newHead
            newHead = temp
            temp = node
        }
        return newHead
    }
    let reversed = reverse(head),temp = reversed
    let index = n - 2
    while(index>0) {
        temp = temp.next
        index--
    }
    temp.next = temp.next.next
    return reverse(reversed)
    // 直接找到指定位置然后删除
    /*
    if(!head.next) {
        return null
    }
    let newHead = new ListNode(0,head)
    if(n === 1) {
        while(head.next.next) {
            head = head.next
        }
        head.next = null
        return newHead.next
    }
    let count = 0
    while(head) {
        head = head.next
        count++
    }
    head = newHead.next
    if(n===count) {
        return newHead.next.next
    }
    let index = count - n - 1
    while(index>0) {
        head = head.next
        index--
    }
    head.next = head.next.next
    return newHead.next   */
};
