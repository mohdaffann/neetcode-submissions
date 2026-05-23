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
        const height = (node)=>{
            if(node===null) return 0;
            let left = height(node.left);
            let right = height(node.right);
            return Math.max(left , right) + 1;
        }
        const diamCheck=(node)=>{
            if(node===null) return;
            let left = height(node.left);
            let right = height(node.right);
            max = Math.max(max , left+right);
            diamCheck(node.left);
            diamCheck(node.right);
        }
        diamCheck(root);
        return max
    }
}
