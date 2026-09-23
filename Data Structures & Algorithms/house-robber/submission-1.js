class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let dp = []
        dp[nums.length] = 0;
        dp[nums.length+1] = 0;
        for(let i = nums.length-1 ; i>=0 ; i--){
            dp[i] = Math.max(dp[i+1] , nums[i]+dp[i+2])
        }
        return dp[0]
    }
}
