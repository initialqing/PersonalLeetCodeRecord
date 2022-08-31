import {root,Node} from "./ListNode.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
    let cur = head,temp = null,pre = null
    while (cur) {
        // 保存临时变量
        temp = cur.next
        cur.next = pre
        // 记录当前状态
        pre = cur
        cur = temp
    }
    return cur
};
reverseList(root)
