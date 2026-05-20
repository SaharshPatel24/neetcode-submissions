class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number,number>();
        const newNums = new Array<number>(k);
        for(const i of nums){
            map.set(i, (map.get(i) || 0) + 1);
        }

        return [...map.entries()]
                .sort((a, b) => b[1] - a[1])  // sort by frequency
                .slice(0, k)                   // take top k
                .map(entry => entry[0]); 

    }
}
