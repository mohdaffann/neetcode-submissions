class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let st = [];
        
        for (let ch of s){
            if(ch==='{'){
                st.push('}')
            } else if (ch==='['){
                st.push(']')
            } else if (ch==='('){
                st.push(')')
            } else {
                if(st[st.length-1]===ch) st.pop();
                else return false;
            }
        }
       
       return st.length ===0
        
    }
}
