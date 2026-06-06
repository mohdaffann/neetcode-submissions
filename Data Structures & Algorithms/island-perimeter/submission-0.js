class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let per = 0;
        for(let i=0 ; i<grid.length ; i++){
            for (let j=0 ; j<grid[i].length; j++){
                if(grid[i][j]===1){
                    if(i-1<0 || grid[i-1][j]===0) per++;
                    if(i+1>=grid.length || grid[i+1][j]===0) per++;
                    if(j-1<0 || grid[i][j-1]===0) per++;
                    if(j+1 >= grid[i].length || grid[i][j+1]===0) per++
                }
            }
        }
        return per;
    }
}
