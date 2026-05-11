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
        let slowptr = head;
        let fastptr = head;
        
        while(fastptr.next && fastptr.next.next){
            
            slowptr = slowptr.next;
            fastptr = fastptr.next.next;
        }
        let second = slowptr.next;
        slowptr.next = null;

        let revHead = revList(second);
        while(curr!==null && revHead!==null){
            let currNext = curr.next;
            let revNext = revHead.next;
            curr.next = revHead;
            revHead.next = currNext;
            curr = currNext;
            revHead = revNext;
        }
        
        return head;

    }
}
