class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let map = {};
        for (let ch of s){
            map[ch] = (map[ch] || 0) + 1;
        }
        for(let ch of t){
            if(!map[ch]) return false;
            map[ch] --;
        }
        return true;
    }
}
