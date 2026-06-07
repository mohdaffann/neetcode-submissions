class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let row = grid.length;
        let col = grid[0].length;
        let q = []
        for(let i = 0 ; i<row ; i++){
            for(let j = 0 ; j<col ; j++){
                if(grid[i][j]===2){
                    q.push([i,j])
                }
            }
        }
          let dir = [[1,0] , [-1,0] , [0,-1] , [0,1]];
          let min = 0;
        while(q.length){
              let len = q.length;
              let added = false;
              for (let i=0 ; i<len ;  i++){
                let coordinates = q.shift();
                let [r,c] = coordinates;
                for(let [dr , dc] of dir){
                let nr = r + dr;
                let nc = c + dc;
                if(nr>=0 && nr<row && nc>=0 && nc < col && grid[nr][nc]===1){
                    grid[nr][nc] = 2;
                    added = true
                    q.push([nr , nc])
                }
            }
         }
         if(added) min++;
               
        }
        for(let i = 0; i < row; i++){
          for(let j = 0; j < col; j++){
            if(grid[i][j] === 1) return -1;
    }
}
return min;
    }
}
