class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if(nums.length===1){
            return nums[0]
        }
        let dp1 =  [];
        let dp2 = []
        function dfs1(i){
            if(i>=nums.length-1){
                return 0;
            }
            if(dp1[i]!==undefined) return dp1[i]
            let take = nums[i]+dfs1(i+2);
            let notTake = dfs1(i+1)
            return dp1[i] =  Math.max(take , notTake)
        }
        function dfs2(i){
            if(i>=nums.length){
                return 0;
            }
            if(dp2[i]!==undefined) return dp2[i]
            let take = nums[i]+dfs2(i+2)
            let notTake = dfs2(i+1);
            return dp2[i] =  Math.max(take , notTake)
        }
        return  Math.max(dfs1(0) , dfs2(1))
    }
}
