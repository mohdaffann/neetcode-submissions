class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let st = [];
        for (let ch of s){
            let str = '';
            let res = ''
            let num = ''
         if(ch!==']'){
            st.push(ch);
         }
         else {
            while(st.length && st[st.length-1]!=='['){
                str=st.pop()+str;
            }
            st.pop();
            while(!isNaN(st[st.length-1])){
                num = st.pop()+num;
            }
            num = parseInt(num);
            for(let i = 0 ; i<num ; i++){
                res = res+str;
            }
            st.push(res);
         }
        }
        return st.join('');
    }
}
