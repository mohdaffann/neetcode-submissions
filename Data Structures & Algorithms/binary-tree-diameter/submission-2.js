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
    diameterOfBinaryTree(root) {
        let max = 0;
       
        const diamCheck=(node)=>{
            if(node===null) return 0;
            let left = diamCheck(node.left);
            let right = diamCheck(node.right);
            max = Math.max(max , left+right);
            return 1+Math.max(left , right)
        }
        diamCheck(root);
        return max
    }
}
