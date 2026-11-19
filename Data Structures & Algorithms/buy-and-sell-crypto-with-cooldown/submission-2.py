class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        prev = [0,0]
        last_prev = [0,0]
        n = len(prices)
        for i in range(n-1 , -1 , -1):
            curr = [0,0]
            for j in range(2):
                if j==0:
                    curr[0] = max(-prices[i]+prev[1] , prev[0])
                else:
                    curr[1] = max(prices[i]+last_prev[0] , prev[1])
            temp = prev
            prev = curr
            last_prev = temp
        return prev[0]
