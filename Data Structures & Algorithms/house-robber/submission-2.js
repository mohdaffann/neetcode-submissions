class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
       let rob2 = 0;
       let rob1=0;
       for(let i=nums.length-1 ; i>=0 ; i--){
         let curr = Math.max(nums[i]+rob2 , rob1);
         rob2 = rob1;
         rob1 = curr
       }
       return rob1
    }
}
