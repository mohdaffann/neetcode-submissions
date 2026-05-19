class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let low = 1;
        let high = x;
        let ans = 0;
        if(x===0) return 0;
        if(x===1) return 1;
        while(low<=high){
            let mid = Math.floor((low+high)/2);
            if (mid*mid === x) {
                ans = mid;
                return ans;
            }
           else if (mid*mid > x){
            high = mid-1;
           }
           else if (mid*mid <= x){
            ans = mid;
            low = mid+1;
           }
        }
        return ans;
    }
}
