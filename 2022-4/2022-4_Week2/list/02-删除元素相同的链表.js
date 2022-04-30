/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 *
 * 采用set集合，先把出现重复的元素存起来，在遍历一次删除
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let arr = new Set()
    let cur = new ListNode(0,head)
    newHead = cur
    Head = cur
    while(newHead.next&&newHead.next.next) {
        if(newHead.next.val === newHead.next.next.val){
            const x = newHead.next.val
            arr.add(x)
            newHead = newHead.next
        }else {
            newHead = newHead.next
        }
    }
    while(Head.next) {
        if(arr.has(Head.next.val)){
            Head.next = Head.next.next
        }else{
            Head = Head.next
        }
    }
    return cur.next

};
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
var deleteDuplicates = function(head) {
    let node = new ListNode(-1)
    node.next = head
    let cur = node
    while (cur.next && cur.next.next) {
        if (cur.next.val === cur.next.next.val){ // 重复
            let val = cur.next.val
            /**
             * 注意逻辑运算符的前后位置，首先应该判断cur的下一个节点存在与否在判断值，假如节点都没有值也就不用谈了
             */
            while(cur.next && cur.next.val === val){
                cur.next = cur.next.next
            }
        } else { // 不重复
            cur = cur.next
        }
    }
    return node.next
};
