class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let dp = Array(text1.length+1).fill().map(()=>Array(text2.length+1).fill(Infinity))

        for(let i=0 ; i<dp[0].length ; i++){
            dp[0][i] = 0;
        }
        for(let j=0 ; j<dp.length ; j++){
            dp[j][0] = 0;
        }

        for(let i=1 ; i<dp.length ; i++){
            for(let j=1 ; j<dp[0].length ; j++){
                if(text1[i-1]===text2[j-1]){
                    dp[i][j] =  1 + dp[i-1][j-1]
                } else {
                    dp[i][j] = Math.max(dp[i-1][j] , dp[i][j-1])
                }
            }
        }
        return dp[dp.length-1][dp[0].length-1]
    }
}
