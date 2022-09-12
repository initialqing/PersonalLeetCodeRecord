/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from "./08-重排链表";
/**
 * 先将链表的内容存入一个数组中，再用双指针比较数组是否是对称的就可以。
 * @param head
 */
function isPalindrome(head: ListNode | null): boolean {
    let arr:number[] = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    return judje(arr)

};
interface Judje {
    (arr:number[]):boolean
}
const judje:Judje  = (arr:number[]):boolean => {
    let left = 0,right = arr.length - 1
    while(left < right) {
        if(arr[left] !== arr[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
