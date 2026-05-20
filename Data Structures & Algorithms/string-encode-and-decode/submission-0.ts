class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < s.length) {
            // find the # delimiter
            let j = i;
            while (s[j] !== '#') j++;

            // read the length
            const length = parseInt(s.slice(i, j));

            // read the word using length
            const word = s.slice(j + 1, j + 1 + length);
            result.push(word);

            // move to next word
            i = j + 1 + length;
        }

    return result;
    }
}
