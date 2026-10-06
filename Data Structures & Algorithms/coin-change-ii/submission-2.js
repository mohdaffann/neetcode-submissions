class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = Array(coins.length).fill().map(()=>Array(amount+1).fill(Infinity));

        function dfs(i , req){
            if(req===0){
                return 1;
            }
            if(req<0) return 0
            if(dp[i][req]!==Infinity){
                return dp[i][req]
            }
            if(i===0){
                if(req%coins[i]===0){
                    return 1;
                } else {
                    return 0;
                }
            }
            let notTake = dfs(i-1 , req);
            let take = 0;
            if(req>=coins[i]){
                take = dfs(i,req-coins[i])
            }
            return dp[i][req] =  take+notTake

        }
        return dfs(coins.length-1 , amount)
    }
}
