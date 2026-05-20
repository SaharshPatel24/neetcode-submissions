class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0;
        let right = 0;
        let maxProfit = 0;

        for(let right = 0; right < prices.length; right++){
            while(prices[left] > prices[right]) left++;

            maxProfit = Math.max(maxProfit, (prices[right] - prices[left]))
        }

        return maxProfit;
    }
}
