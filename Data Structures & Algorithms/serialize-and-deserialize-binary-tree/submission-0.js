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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let res = [];
        if (root===null) return ''
        let q = [root];
        while(q.length){
            const node = q.shift();
            if(node===null){
                res.push('n');
            } else {
                res.push(node.val);
                q.push(node.left);
                q.push(node.right);
            }
        }
        return res.join(',')
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (data==='') return null;
        const arr = data.split(',');
        let root = new TreeNode(arr[0])
        let q = [root];
        let i = 1;
        while(q.length){
            const node = q.shift();
            if(arr[i]!=='n'){
                node.left = new TreeNode(arr[i]);
                q.push(node.left);
            }
            i++
            if(arr[i]!=='n'){
                node.right = new TreeNode(arr[i]);
                q.push(node.right)
            }
            i++
        }
        return root
    }
}
