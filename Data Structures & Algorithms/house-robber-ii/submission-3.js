class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length===1) return nums[0]
       let dp1 = [];
       let dp2 = [];

       dp1[nums.length-1] = 0;
       dp1[nums.length] = 0;

       dp2[nums.length] = 0;
       dp2[nums.length+1] = 0;

       for(let i=nums.length-2 ; i>=0 ; i--){
         let pick = nums[i]+dp1[i+2];
         let notPick = dp1[i+1];
         dp1[i] = Math.max(pick , notPick)
       }
       for(let i = nums.length-1 ; i>0 ; i--){
        let pick = nums[i]+dp2[i+2];
        let notPick = dp2[i+1];
        dp2[i] = Math.max(pick , notPick)
       }
       return Math.max(dp1[0] , dp2[1])
    }
}
