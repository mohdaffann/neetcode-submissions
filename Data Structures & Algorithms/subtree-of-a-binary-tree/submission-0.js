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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const checkSubtree=(node , subNode)=>{
            if(node===null && subNode===null) return true;
            if(!(node&&subNode)) return false;
            if(node.val!==subNode.val) return false;
            return checkSubtree(node.left , subNode.left) && checkSubtree(node.right , subNode.right)
        }
        function check(node){
            if (node===null) return false;
            if(checkSubtree(node , subRoot)) return true;
          return  check(node.left) || check(node.right)
        }
      const res =   check(root);
      return res
    }
}
