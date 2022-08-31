import {root,Node} from './ListNode.js'
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
    //处理特殊情况
    if(!head||!head.next) {
        return head===null?null:head
    }
    let node = new Node(0,head),temp = node
    while(temp.next && temp.next.next) {
        let pre = temp.next,cur = temp.next.next
        // 操作链表先动前面的
        pre.next = cur.next
        cur.next = pre
        // 更新状态
        temp.next = cur
        temp = pre
    }
    return node.next
};
let res = swapPairs(root)
while (res) {
    console.log(res.val)
    res = res.next
}
