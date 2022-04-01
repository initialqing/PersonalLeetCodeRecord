function merge() {
    let p = ListNode(0)
    let newNode = p
    if(list1===null && list2===null) {
        return null
    }else if (list2===null){
        return list1
    }else{
        return list2
    }
    while(list1 !== null && list2!==null) {
        if(list1.val<=list2.val) {
            newNode.next = list1
            list1 = list1.next
        }else {
            newNode.next = list2
            list2l = list2.next
        }
        newNode = newNode.next
    }
    newNode.next === ist1 === null? list2:list1
    return p.next
}
