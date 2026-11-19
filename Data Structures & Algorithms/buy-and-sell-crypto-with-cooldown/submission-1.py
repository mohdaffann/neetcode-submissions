class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp = [[-1,-1] for _ in range(len(prices)+2)]
        def dfs(i , buyed):
            if i>=len(prices):
                return 0
            if dp[i][buyed]!=-1:
                return dp[i][buyed]
            max_profit = 0
            if buyed==0:
                max_profit = max(-prices[i]+dfs(i+1 , 1) , dfs(i+1 , 0))
            else:
                max_profit = max(prices[i]+dfs(i+2 , 0) , dfs(i+1 , 1))
            dp[i][buyed] = max_profit
            return dp[i][buyed]
        
        return dfs(0,0)
