class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let dp = Array(m).fill().map(()=>Array(n).fill(-1));
        function dfs(i,j){
            if(i>=m || j>=n){
                return 0;
            }
            if(grid[i][j]===1){
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
