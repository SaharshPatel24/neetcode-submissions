class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = new Array<string>();
        const map = new Map<string,string>([
            [")","("],
            ["]","["],
            ["}","{"]
        ])

        for(let i = 0; i < s.length; i++){
            if("([{".includes(s[i])){
                stack.push(s[i]);
            } else {
                if(map.get(s[i]) !== stack.pop()){
                    return false
                } 
            }
        }

        return stack.length === 0;
    }
}
