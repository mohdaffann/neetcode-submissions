class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let left = 0;
        let right = s.length-1;
        while(left<right){
            let tmp = s[left];
            s[left] = s[right];
            s[right] = tmp;
            left++;
            right--
        }
    }
}
