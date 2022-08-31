/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists) {
    // if(lists.length===0) return null
    // if(lists.length===1) return lists[0]
    // 合并两个链表的方法
    const mergeTwo = (list1,list2) => {
        if (list1 === null && list2 === null) {
            return null
        }
        if (list1 === null || list2 === null) {
            return list1 === null ? list2 : list1
        }
        let newHead = new ListNode(0)
        let temp = newHead
        while (list1 !== null && list2 !== null) {
            if (list1.val>=list2.val) {
                temp.next = list2
                // newHead = newHead.next
                list2 = list2.next
            }else {
                temp.next = list1
                // newHead = list1
                // newHead = newHead.next
                list1 = list1.next
            }
            temp = temp.next
        }
        temp.next = list1 === null? list2 : list1
        return newHead.next
    }
    let newHead =  new ListNode(-Infinity)
    let temp = newHead
    // 迭代合并两个链表
    for(let i = 0;i<lists.length;i++) {
        temp = mergeTwo(lists[i],temp)
    }
    return newHead.next
    // return mergeTwo(lists.pop(),mergeKLists(lists))
};