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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        const deleteNode = (node , target)=>{
            if (node===null) return null;
            node.left = deleteNode(node.left,target);
            node.right = deleteNode(node.right , target);
            if(node.val===target && !node.left && !node.right){
                return null
            }
            return node;
        }
       return deleteNode(root , target)
    }
}
