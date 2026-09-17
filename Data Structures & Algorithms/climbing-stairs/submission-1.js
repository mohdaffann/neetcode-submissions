class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let memo = []
        function stair(i){
            if(i>n){
                return 0;
            }
            if(i===n){
                return 1;
            }
            if(memo[i]) {
                return memo[i]
            }
           return  memo[i] =  stair(i+1)+stair(i+2)
        }
       return stair(0)
    }
    
}
