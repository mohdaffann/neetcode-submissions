class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let minWt = 0;
        let maxWt = 0;
        for(let nums of weights){
            maxWt+=nums;
            if(nums>minWt){
                minWt = nums;
            }
        }
        let low = minWt;
        let high = maxWt;
        let ans = 0 ;
        while(low<=high){
           let  mid = Math.floor((low+high)/2);
            let daysTotal = 1 ;
            let load = 0;
            for (let weight of weights){
                if(weight+load <= mid){
                    load = load + weight
                } else {
                    daysTotal++;
                    load = weight;
                }
            }
            if (daysTotal <= days){
                ans = mid;
                high = mid-1
            } else {
                low = mid+1;
            }

        }
        return ans;
       
    }

}
