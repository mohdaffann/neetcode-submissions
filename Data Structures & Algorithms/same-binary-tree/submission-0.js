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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
      function  recurse(a,b){
            if(a===null && b===null) return true
            if(!(a && b)) return false;
            if(!(a.val===b.val)) return false
            return recurse(a.left , b.left) && recurse(a.right , b.right)
        }
        return recurse(p,q)
    }
}
