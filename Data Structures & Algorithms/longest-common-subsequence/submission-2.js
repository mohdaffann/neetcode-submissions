class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let dp = Array(text1.length+1).fill().map(()=>Array(text2.length+1).fill(Infinity))
        function dfs(i,j){
            if(i<0 || j<0){
                return 0;
            }
            if(dp[i][j]!==Infinity){
                return dp[i][j]
            }
            if(text1[i]===text2[j]){
                return dp[i][j] =   1 + dfs(i-1 , j-1)
            } else{
                return dp[i][j] =  Math.max(dfs(i,j-1) , dfs(i-1 , j))
            }
            
        }
        return dfs(text1.length-1 , text2.length-1)
    }
}
