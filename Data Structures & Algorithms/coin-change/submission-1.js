class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = Array(coins.length).fill().map(()=>Array(amount+1).fill(Infinity))
         function dfs(i,t){
            if(i===0){
            if(t%coins[i]===0){
                return t/coins[0]
            } else {
                return Infinity
            }
           }
           if(dp[i][t]!==Infinity){
            return dp[i][t]
           }
            let notTake = dfs(i-1 , t);
            let take = Infinity;
            if(coins[i]<=t){
                take = 1 + dfs(i , t-coins[i])
            }
            return dp[i][t] = Math.min(take , notTake)
         }
         let ans =  dfs(coins.length-1 , amount)
         return ans === Infinity ? -1 : ans
    }
}
