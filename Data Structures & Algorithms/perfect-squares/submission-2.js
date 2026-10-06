class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        let start = Math.floor(Math.sqrt(n));
        let dp = Array(start+1).fill().map(()=>Array(n+1).fill(Infinity))
        function dfs( i , t){
            if(i===1){
                return 1*t;
            }
            if(dp[i][t]!==Infinity){
                return dp[i][t]
            }
            let notTake = dfs(i-1 , t);
            let take = Infinity;
            if(t>=i*i){
                take = 1 + dfs(i, t-(i*i))
            }
            return dp[i][t] =  Math.min(notTake , take)
        }
        return dfs(start , n)
    }
}
