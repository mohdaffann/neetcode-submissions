/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
function revList(head){
    let curr = head;
    let prev = null;
    while(curr!==null){
        let nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */

    reorderList(head) {
        let curr = head;
        let fast = head;
        let slow = head;
        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        const secondHalf = slow.next;
        slow.next = null;
        let newHead = revList(secondHalf);
        let second = newHead;
        while(second!==null){
            let currNext = curr.next;
            let secondNext = second.next;
            curr.next = second;
            second.next = currNext;
            curr = currNext;
            second = secondNext;
        }
    }
}
