/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let max = -Infinity;
        let count  = 0;
        const check = (node , maxSeen)=>{
            if(node===null) return;
            if(node.val>=maxSeen){
                maxSeen = node.val
                count++
            }
            check(node.left , maxSeen);
            check(node.right , maxSeen)
        }
        check(root , max)
        return count
    }
}
