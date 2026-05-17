class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for (let ch of strs){
           let sorted =  ch.split('').sort().join('');
            if(!map.has(sorted)){
                map.set(sorted , []);
            }
            map.get(sorted).push(ch);
        }
        return Array.from(map.values())
    }
}
