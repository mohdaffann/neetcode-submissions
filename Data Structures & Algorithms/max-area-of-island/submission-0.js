class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let visited = new Array(rows).fill(null).map(()=>new Array(cols).fill(false));
        let maxArea = 0;
        let q = [];
        let dir = [[0,1] , [0,-1] , [1,0] , [-1,0]]
        function bfs(r,c){
            visited[r][c] = true;
            q.push([r,c]);
            let area = 0;
            while(q.length){

               let [r,c] = q.shift();
                area++
               for(let [dr,dc] of dir){
                let nr = r+dr;
                let nc = c+dc;
                if(nr<rows && nc<cols && nr>=0 && nc>=0 && grid[nr][nc]===1
                && visited[nr][nc] === false
                ){
                    visited[nr][nc] = true;
                    q.push([nr,nc])
                }
               } 
            }
            return area;

        }


        for(let i = 0 ; i<rows ; i++){
            for(let j = 0 ; j<cols ; j++){
                if(visited[i][j]===false && grid[i][j]===1){
                    let res = bfs(i,j);
                 
                    maxArea = Math.max(maxArea , res);
                }
            }
        }
        return maxArea;
    }
}
