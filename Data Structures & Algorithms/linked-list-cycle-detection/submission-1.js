/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let curr = head;
        let fastptr = curr;
        let slowptr = curr;
        while(fastptr && fastptr.next){
            slowptr = slowptr.next;
            fastptr = fastptr.next.next;
            if(slowptr===fastptr) return true
        }
        return false
    }
}
