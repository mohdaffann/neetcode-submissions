class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);
        let st = [];
        for(let i = 0 ; i<temperatures.length ; i++){
            while(st.length && temperatures[i] > temperatures[st[st.length-1]]){
                res[st[st.length-1]] = Math.abs(st[st.length-1] - i);
                st.pop();
            }
            st.push(i);
        }
        return res;
    }
}
