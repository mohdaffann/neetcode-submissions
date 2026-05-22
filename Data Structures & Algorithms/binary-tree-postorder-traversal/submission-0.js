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
     * @return {number[]}
     */
    postorderTraversal(root) {
        let res = [];
        const traverse = (node)=>{
            if(node===null) return;
            traverse(node.left);
            traverse(node.right);
            res.push(node.val)
        }
        traverse(root)
        return res;
    }
    
}
