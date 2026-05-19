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
        for (let i = 1 ; i <=maxHour ; i++){
            let currentTime = 0;
            for (let num of piles){
                currentTime+=Math.ceil(num/i);
            }
            if(currentTime<=h) return i;
        }
        return -1
    }
}
