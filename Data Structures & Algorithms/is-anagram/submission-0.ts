class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const firstMap = new Map<string, number>();
        const secondMap = new Map<string,number>();

        if(s.length != t.length) return false;

        for(const i of s){
            firstMap.set(i, (firstMap.get(i) || 0)+1)
        }

        for(const i of t){
            secondMap.set(i, (secondMap.get(i) || 0)+1)
        }

        for(const i of s){
            if(firstMap.get(i) !== secondMap.get(i)){
                return false
            }
        }

        return true
    }
}
