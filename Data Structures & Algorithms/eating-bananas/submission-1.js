class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
     
    minEatingSpeed(piles, h) {

        

        let maxHour = 0;
        for (let num of piles){
            if (num > maxHour){
                maxHour = num;
            }
        }
        let low = 1;
        let high = maxHour;
        let ans = 0;
        while(low<=high){
            let mid = Math.floor((low+high)/2);
            let totalHrs = 0;
            for(let nums of piles){
                totalHrs += Math.ceil(nums/mid);
            }
            if (totalHrs<=h){
                ans = mid;
                high = mid-1;
            } else {
                low = mid+1;
            }
        }
        return ans
        
    }
}

