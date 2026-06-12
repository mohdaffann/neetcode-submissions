class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;
        let visited = new Array(rows).fill(null).map(()=>new Array(cols).fill(false));
        let dir = [[0,1] , [0,-1] , [1,0] , [-1,0]];
        let q = [];
        function bfs(r,c){
            q.push([r,c]);
            visited[r][c] = true;
            while(q.length){
                let [r,c] = q.shift();
                for(let [dr , dc] of dir){
                    let nr = r+dr;
                    let nc = c+dc;
                    if(nr<rows && nc<cols && nr>=0 && nc>=0 && 
                    board[nr][nc]==='O' && visited[nr][nc]===false
                    ){
                        visited[nr][nc] = true 
                        q.push([nr,nc])
                    }
                }
            }
        }
        for(let i=0 ; i<cols ; i++){
            if(board[0][i]==='O' && visited[0][i]===false){
                bfs(0,i)
            }
        }
        for(let i=0 ; i<cols ; i++){
            if(board[rows-1][i]==='O' && visited[rows-1][i]===false){
                bfs(rows-1 , i)
            }
        }
        for(let i = 0 ; i<rows;i++){
            if(board[i][0]==='O' && visited[i][0]===false){
                bfs(i,0)
            }
        }
        for(let i = 0 ; i<rows ; i++){
            if(board[i][cols-1]==='O' && visited[i][cols-1]===false){
                bfs(i , cols-1);
            }
        }

        for(let i = 0 ; i<rows ; i++){
            for(let j = 0 ; j<cols ; j++){
                if(board[i][j]==='O' && visited[i][j]===false){
                    board[i][j] = 'X';
                }
            }
        }


    }
}
