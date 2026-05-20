class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for(let i = 0; i < nums.length; i++){
            const req = target - nums[i];
            
            if(map.has(req)){
                return [map.get(req), i]; 
            }

            map.set(nums[i],i);
        };

        return [-1,-1];
    }
}
