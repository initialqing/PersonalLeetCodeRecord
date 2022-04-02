const mergeTwoList = (list1, list2) => {
    if (list1 === null && list2 === null) {
        return []
    }
    if (list1 === null || list2 === null) {
        return list1 === null ? list2 : list1
    }
    let newHead = new ListNode()
    while (list1 !== null || list2 !== null) {
        if (list1.val>list2.val) {
            newHead = list2
            newHead = newHead.next
            list2 = list2.next
            continue
        }else {
            newHead = list1
            newHead = newHead.next
            list1 = list1.next
            continue
        }
    }
    if (list1===null) {
        newHead = list2
    }
    if (list2===null) {
        newHead = list1
    }
    return newHead

}