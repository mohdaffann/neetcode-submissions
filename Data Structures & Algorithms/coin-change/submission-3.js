class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let prev = Array(amount+1).fill(Infinity)
        for(let t=0 ; t<prev.length ; t++){
            if(t%coins[0]===0){
                prev[t] = t/coins[0]
            } else {
                prev[t] = Infinity;
            }
        }
        for(let i=1 ; i<coins.length ; i++){
            let curr = []
            for(let j=0 ; j<prev.length ; j++){
                let notTake = prev[j];
                let take = Infinity;
                if(coins[i]<=j){
                    take = 1 + curr[j-coins[i]]
                }
                curr[j] = Math.min(take , notTake)
            }
            prev=curr;
        }
        let ans =  prev[amount];
        return ans===Infinity ? -1 : ans
    }
}
