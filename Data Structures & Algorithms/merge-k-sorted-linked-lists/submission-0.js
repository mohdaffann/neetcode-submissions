/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
 function mergeLists (l1 , l2){
    let dummy = new ListNode(0);
    let curr = dummy;
    while(l1!==null && l2!==null){
        if(l1.val <= l2.val){
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if(l1!==null) curr.next = l1;
    if(l2!==null) curr.next = l2;
    return dummy.next;

 }
class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length===0) return null;
        while(lists.length>1){
            let newList = [];
            for(let i = 0 ; i<lists.length ; i+=2){
                let l1 = lists[i]
                let l2 = i+1 < lists.length ? lists[i+1] : null;
                newList.push(mergeLists(l1 , l2))
            }
            lists = newList;
        }
        return lists[0];
    }
}
