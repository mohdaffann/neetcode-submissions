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
     * @return {TreeNode}
     */
    
    invertTree(root) {
        const invertNodes = (node)=>{
            if(node===null) return
            let temp = node.left;
            node.left = node.right;
            node.right = temp; 
            invertNodes(node.left);
            invertNodes(node.right);
        }
        invertNodes(root);
        return root;
    }
}
