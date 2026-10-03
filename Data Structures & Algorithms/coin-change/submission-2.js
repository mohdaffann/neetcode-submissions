class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = Array(coins.length).fill().map(()=>Array(amount+1).fill(Infinity))
        for(let t=0 ; t<dp[0].length ; t++){
            if(t%coins[0]===0){
                dp[0][t] = t/coins[0]
            } else {
                dp[0][t] = Infinity;
            }
        }
        for(let i=1 ; i<coins.length ; i++){
            for(let j=0 ; j<dp[0].length ; j++){
                let notTake = dp[i-1][j];
                let take = Infinity;
                if(coins[i]<=j){
                    take = 1 + dp[i][j-coins[i]]
                }
                dp[i][j] = Math.min(take , notTake)
            }
        }
        let ans =  dp[coins.length-1][amount];
        return ans===Infinity ? -1 : ans
    }
}
