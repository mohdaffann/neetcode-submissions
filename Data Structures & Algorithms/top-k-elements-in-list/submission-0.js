class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (let num of nums){
            map.set(num , (map.get(num)||0)+1)
        }
        let arr = [...map.entries()];
       arr.sort((a,b)=>b[1] - a[1]);
        let res = [];
        for(let i=0 ; i<k ; i++){
            res.push(arr[i][0]);
        }
        return res;
    }
}
