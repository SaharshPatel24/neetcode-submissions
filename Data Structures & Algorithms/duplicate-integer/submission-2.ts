class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const counter = new Set<number>()
        for(const i of nums){
            if(counter.has(i)){
                return true;
            }
            counter.add(i)
        }

        return false;
    }
}
