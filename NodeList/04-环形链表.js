const hasCircle = (head) => {
    if (head === null || head.next === null) return false
    return false
    let slow = head
    let fast = head
    while (slow !== null || fast !== null || fast.next.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (fast===slow) return true
    }
    return false
}