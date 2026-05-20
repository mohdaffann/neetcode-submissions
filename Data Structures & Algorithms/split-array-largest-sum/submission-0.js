class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
         let min = 0;
         let max = 0;
        for (let num of nums){
            max+=num
            if(num>min) min = num;
        }
        console.log(min , max)
        let low = min;
        let high = max;
        let ans = 0;
        while(low<=high){
            let mid = Math.floor((low+high)/2);
            let currSum = 0;
            let count = 1;
            for(let num of nums){
                if(currSum+num <= mid){
                    currSum+=num;
                }
                else {
                    count++;
                    currSum = num;
                }
            }
            if(count <= k){
                ans = mid;
                high = mid-1;
            } else {
                low = mid+1
            }
        }
        return ans
    }
}
