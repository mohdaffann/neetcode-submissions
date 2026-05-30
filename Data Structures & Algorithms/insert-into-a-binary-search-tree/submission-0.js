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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
       const search = (node , val)=>{
        if (node===null) return new TreeNode(val);
        if(val<node.val){
            node.left = search(node.left , val)
        } else {
            node.right = search(node.right , val)
        }
        return node;
       }
       return search(root , val)
    }
}
