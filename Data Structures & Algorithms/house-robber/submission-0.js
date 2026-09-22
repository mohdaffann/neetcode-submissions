class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let dp = []
        function dfs(idx){
            if(idx>=nums.length){
                return 0;
            }
            if(dp[idx]!==undefined) return dp[idx];
            let pick = nums[idx]+dfs(idx+2);
            let notPick = dfs(idx+1);
            return dp[idx] =  Math.max(pick , notPick)
        }
       return dfs(0)
    }
}
