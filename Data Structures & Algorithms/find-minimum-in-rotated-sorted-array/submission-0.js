class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0;
        let high = nums.length-1;
        let res = Infinity;
        while(low<=high){
            const mid = Math.floor((low+high)/2);
            if(nums[low]<=nums[mid]){
                res = Math.min(res , nums[low]);
                low = mid+1;
            } else {
                res = Math.min(res , nums[mid]);
                high = mid-1;
            }
        }
        return res;
    }
}
