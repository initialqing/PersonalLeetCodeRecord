/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    const map = new Map()
    map.set(null,null)

    let cur = head
    while(cur !== null) {
        map.set(cur,new Node(cur.val))
        cur = cur.next
    }
    cur = head
    
    while(cur !== null) {
        map.get(cur).next = map.get(cur.next)
        map.get(cur).random = map.get(cur.random)
        console.log(map.get(cur.random))
        cur = cur.next
    }
    let s = map.get(head)
    return s
};