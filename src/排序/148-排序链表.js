
/**
 * https://leetcode.cn/problems/sort-list/solution/148-pai-xu-lian-biao-gui-bing-pai-xu-si-93kul/
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    // 合并两个链表的代码
    function merge(head1, head2) {
        const dummyHead = new ListNode()
        let temp = dummyHead, temp1 = head1, temp2 = head2
        while (temp1 !== null && temp2 !== null) {
            if (temp1.val <= temp2.val) {
                temp.next = temp1
                temp1 = temp1.next
            }else {
                temp.next = temp2
                temp2 = temp2.next
            }
            temp = temp.next
        }
        if (temp1 !== null) {
            temp.next = temp1
        }else if (temp2 !== null) {
            temp.next = temp2
        }
        return dummyHead.next
    }
    // 分开两个链表的代码
    function toSortList(head, tail) {
        if (head === null) return head
        // 分割最后左右两边各一个节点
        if (head.next === tail) {
            head.next = null
            return head
        }
        // 快慢指针找到中间节点
        let slow = head, fast = head
        while (fast !== tail) {
            slow = slow.next
            fast = fast.next
            if (fast !== tail) {
                fast = fast.next
            }
        }
        const mid = slow
        return merge(toSortList(head, mid), toSortList(mid, tail))
    }
    return toSortList(head,null)
};