const removeElements = (head, val) => {
    if (!head) return head
    let newHead = new ListNode()
    let temp = new ListNode()
    temp.next = newHead
    newHead.next = head
    while (newHead.next) {
        if (newHead.next.val === val) {
            newHead.next = head.next.next
            continue
        } else {
            newHead = newHead.next
        }
    }
    return temp.next.next
}