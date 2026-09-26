class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let dp = Array(m).fill().map(()=>Array(n).fill(-1));
        function dfs(i,j){
            if(i>=m || j>=n){
                return 0;
            }
            if(i===m-1 && j===n-1){
                return 1;
            }
            if(dp[i][j]!==-1) return dp[i][j]
            let down = dfs(i+1 , j)
            let right = dfs(i,j+1);
            return dp[i][j] =  down+right

        }
        return dfs(0,0)
    }
}
