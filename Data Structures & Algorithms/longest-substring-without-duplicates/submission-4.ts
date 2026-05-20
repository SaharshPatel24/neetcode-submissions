class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0;
        let set = new Set<string>();
        let maxStr = 0

        for(let right = 0; right < s.length; right++){
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            maxStr = Math.max(maxStr, right - left + 1);
            set.add(s[right]);
        }

        return maxStr;
    }
}
