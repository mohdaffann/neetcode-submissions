class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        let start = Math.floor(Math.sqrt(n));
        let dp = Array(start+1).fill().map(()=>Array(n+1).fill(Infinity))
        for(let i=0 ; i<dp[0].length ; i++){
            dp[1][i] = i
        }
        for(let i=2 ; i<start+1 ; i++){
            for(let j=0 ; j<dp[0].length ; j++){
                let notTake = dp[i-1][j];
                let take = Infinity;
                if(j>=(i*i)){
                    take = 1 + dp[i][j-(i*i)]
                }
                dp[i][j] = Math.min(take , notTake)
            }
        }
        return dp[start][n]
    }
}
