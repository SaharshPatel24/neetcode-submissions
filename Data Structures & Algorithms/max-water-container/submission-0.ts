class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxWater = 0;
        let left = 0;
        let right = heights.length - 1;

        while(left <= right){
            const water = (right - left) * Math.min(heights[left],heights[right]);
            maxWater = Math.max(maxWater, water);

            if(heights[left] >= heights[right]){
                right--;
            } else {
                left++
            }
        }

        return maxWater;
    }
}
