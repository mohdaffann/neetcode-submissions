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
     * @return {boolean}
     */
    isBalanced(root) {
        const height = (node)=>{
            if(node===null) return 0;
            let left = height(node.left);
            let right = height(node.right);
            return Math.max(left,right)+1;
        }
        const check = (node)=>{
            if(node===null) return true;
            let leftHeight = height(node.left);
            let rightHeight = height(node.right);
            if(Math.abs(leftHeight-rightHeight)>1) return false;
            return check(node.left) && check(node.right) 
        }
        return check(root)
    }
   

}
