class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        res = []
        def bs(el):
            l , r = 0  , len(res)
            while l<r:
                mid = (l+r)//2
                if res[mid] < el:
                    l = mid+1
                else:
                    r = mid
            
            if l==len(res):
                res.append(el)
            else:
                res[l]=el
        
        for el in nums:
            bs(el)
        return len(res)


        