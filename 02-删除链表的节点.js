    function Node(val) {
        this.val = val
        this.next = null
    }
    let node1 = new Node(1);
    let node2 = new Node(2);
    let node3 = new Node(3);
    let node4 = new Node(4);
    node1.next = node2
    node2.next = node3
    node3.next = node4

let del = function (head,val) {
    if(!head) return head;

    let newHead = new Node(0, head), p = newHead;
    console.log(p)
    while(p.next) {
        if(p.next.val === val) {
            // 删除后直接返回就行了，减少点时间
            p.next = p.next.next;
            return newHead.next;
        }
        p = p.next;
    }
    return null;
}
let res = del(node1,2);
console.log(res)
