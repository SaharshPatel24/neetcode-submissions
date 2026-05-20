class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        nums = nums.sort((a,b) => a- b);
        for(let i = 0; i <= nums.length; i++){
            if(i !== nums[i]) return i;
        }

        return -1;
    }
}
