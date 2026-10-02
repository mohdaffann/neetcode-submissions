class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let sum = nums.reduce((acc,cur)=>acc+cur , 0);
        if(sum%2!==0) return false;
        let target = sum/2;
        let prev = Array(target+1).fill(false);
        prev[nums[0]] = true;
        prev[0] = true;
        for(let i=1 ; i<nums.length ; i++){
            let curr = [];
            for(let j=0 ; j<prev.length ; j++){
                let notTake = prev[j];
                let take = false;
                if(nums[i]<=j){
                    take = prev[j-nums[i]]
                }
                curr[j] = take || notTake;
            }
            prev = curr
        }
        return prev[target]
    }
}
