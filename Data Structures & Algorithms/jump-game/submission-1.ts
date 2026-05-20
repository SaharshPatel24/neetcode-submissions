class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        let furthest = 0;

        for(let i = 0; i<nums.length; i++ ){
            if(i > furthest) return false;
            furthest = Math.max(furthest, i + nums[i]); 
        }

        return true;
    }
}
