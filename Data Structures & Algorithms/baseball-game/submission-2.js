class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    
    calPoints(operations) {
        let st = [];
        let res = 0;
        for(let i = 0 ; i<operations.length ; i++){
            if(operations[i]==='+'){
                st.push(st[st.length-1]+st[st.length-2]);
            }
            else if (operations[i]==='D'){
                st.push(2*st[st.length-1])
            }
            else if (operations[i]==='C'){
                st.pop();
            }
            else {
                st.push(parseInt(operations[i]));
            }
        }
        for(let el of st){
            res+=parseInt(el);
        }
        return res;
    }
}
