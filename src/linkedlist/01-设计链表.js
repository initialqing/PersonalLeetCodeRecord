import root from "./ListNode.js";

const MyLinkedList = function() {
    this.size = 0
    this._head = null
    this._tail = null
};
// 定义节点
class Node {
    constructor (val,next){
        this.val  = val
        this.next = next
    }
}
// /**
//  * @param {number} index
//  * @return {number}
//  */
// 得到指定索引的节点，便于实现删除以及在指定索引位置添加节点的功能
MyLinkedList.prototype.getNode = function (index) {
    if(index<0 || index>=this.size) return
    let cur = new Node(0,this._head)
    while(index>=0) {
        cur = cur.next
        index--
    }
    return cur
}
MyLinkedList.prototype.get = function(index) {
    let head = this._head
    if(index<0||index>=this.size) {
        return -1
    }
    while(index > 0) {
        head = head.next
        index--
    }
    return head.val

    // return this.getNode(index).val
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val,this._head)
    this._head = newNode
    this.size++
    // 之前的节点为空，加入新节点后更新尾节点
    if(!this._tail) {
        this._tail = newNode
    }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val,null)
    this.size++
    if(this._tail) {
        this._tail.next = newNode
        this._tail = newNode
        return
    }
    this._tail = newNode
    this._head = newNode

};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {

    if(index<=0) {
        this.addAtHead(val)
        return
    }else if(index === this.size) {
        this.addAtTail(val)
        return
    }else if(index > this.size) {
        return
    }
    // 找到添加节点的上一个节点
    const node = this.getNode(index-1)
    node.next = new Node(val,node.next)
    this.size++
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<0||index>=this.size) {
        return
    }
    if(index===0) {
        this._head = this._head.next
        if(index===this.size-1) {
            this._tail = this._head
        }
        this.size--
        return
    }
    const node = this.getNode(index-1)
    node.next = node.next.next
    if(index === this.size - 1){
        this._tail = node
    }
    this.size--
};
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
