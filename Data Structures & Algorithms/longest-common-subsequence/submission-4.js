class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
       let prev= Array(text1.length+1).fill(0);
       let m = prev.length;
       for(let i=1 ; i<=text2.length ; i++){
        let curr = Array(m).fill(0)
        for(let j=1 ; j<prev.length ; j++){
            if(text1[j-1]===text2[i-1]){
               curr[j] =  1 + prev[j-1]; 
            } else {
                curr[j] = Math.max(curr[j-1] , prev[j])
            }
        }
        prev = curr;
       }
       return prev[m-1]
    }
}
