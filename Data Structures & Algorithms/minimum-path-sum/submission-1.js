class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        let dp = Array(grid.length).fill().map(()=>Array(grid[0].length).fill(-1))
        function dfs(i,j){
            if(i===grid.length-1 && j === grid[0].length-1){
                return grid[i][j];
            }
            if(i>=grid.length || j>=grid[0].length){
                return Infinity;
            }
            if(dp[i][j]!==-1) return dp[i][j];
            let down = grid[i][j]+dfs(i+1,j)
            let right = grid[i][j]+dfs(i,j+1);
            return dp[i][j] =  Math.min(down , right)
        }
        return dfs(0,0)
    }
}
