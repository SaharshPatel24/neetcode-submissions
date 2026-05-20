class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const counter = new Map<number, number>()
        for(const i of nums){
            if(counter.has(i)){
                return true;
            }
            counter.set(i, 1)
        }

        return false;
    }
}
