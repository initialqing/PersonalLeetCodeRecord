
// node环境下需要修改js的模块化规范
class Node {

    constructor(val,next) {
        this.val = val
        this.next = next
    }
}
class ListNode {
    constructor(root) {
        this.root = root
        this.next = null
    }

    createList(arr) {
        if (arr.length === 0) return null
        let node = new Node(arr[0]);
        this.root = node
        let head = this.root
        for (let i = 1; i < arr.length; i++) {
            head.next = new Node(arr[i])
            head = head.next
        }
        return this.root
    }
}

let listNode = new ListNode();
/**
 * 传入一个数组，按照顺序生成链表
 * @type {number[]}
 */
let arr1 = [1, 2, 3, 4, 5, 6]
// 生成的链表为list
let root = listNode.createList(arr1);
export  {root,Node}


