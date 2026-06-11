class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let count = 0;
        let q = [];
         let dir = [[0,1] , [0,-1] , [1,0] , [-1,0]];
        let visited = new Array(rows).fill(null).map(()=> Array(cols).fill(false));

        function bfs(r ,c ){
            visited[r][c] = true;
            q.push([r,c]);
           
            while(q.length){
                let [r,c] = q.shift();
                for(let [dr , dc] of dir){
                    let nr = r+dr;
                    let nc = c+dc;
                    if(nr<rows && nc < cols && nr>=0 && nc>=0
                    && grid[nr][nc]==='1' && visited[nr][nc] === false
                    ){
                        visited[nr][nc] = true;
                        q.push([nr , nc]);
                    }
                }
            }
        }
        for (let i=0 ; i<rows ; i++){
            for (let j = 0 ; j<cols ; j++){
                if(!visited[i][j] && grid[i][j]==='1'){
                    bfs(i,j);
                    count++;
                }
            }
        }
        return count;
    }
}
