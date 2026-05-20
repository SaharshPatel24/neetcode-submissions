class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let prev = 1;
        let curr = 1;
        for(let i = 2; i <= n; i++){
            let temp = curr;
            curr = curr + prev;
            prev = temp
        }

        return curr
    }
}
