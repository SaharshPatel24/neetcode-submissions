class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let newStr ="";
        for(const i of s){
            if(/^[A-Za-z0-9]$/.test(i)){
                newStr += i.toLowerCase();
            }
        }

        let left = 0;
        let right = newStr.length - 1;

        while(left <= right){
            if(newStr[left] !== newStr[right]){
                return false
            }

            left++;
            right--;
        }

        return true
    }
}
