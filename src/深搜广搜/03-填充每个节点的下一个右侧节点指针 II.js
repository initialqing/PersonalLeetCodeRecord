/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let head = root
    let queue = []
    queue.push(head)
    while(queue.length) {
        let first = queue.shift()
        let second = queue.shift()
        if(second){
            first.next = second
            temp = first
        }else {
            first.next = null
        }
    }
};
