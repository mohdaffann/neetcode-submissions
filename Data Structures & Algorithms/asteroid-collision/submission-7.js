class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let st = [];
        for (let i = 0 ; i<asteroids.length ; i++){
            let curr = asteroids[i];
            if(st.length===0 || curr > 0){
                st.push(curr)
            }
            else {
                while(st.length  && st[st.length-1] > 0 && st[st.length-1] < Math.abs(curr)){
                     st.pop();
                }
                if(st.length && st[st.length-1] > 0 && st[st.length-1]===Math.abs(curr)){
                    st.pop();
                }
               
                else if (st.length===0 || st[st.length-1]<0){
                    st.push(curr);
                }
            }
        }
        return st;
    }
}
