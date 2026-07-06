class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        let set = new Set([...wordList]);
        let q = [];
        q.push([beginWord , 1]);
        set.delete(beginWord);

        while(q.length){
            let [word , count] = q.shift();
            if(word === endWord) return count;

            for(let i=0 ; i<word.length ; i++){
                for(let j=97 ; j<=122; j++){
                    let arr = word.split('');
                    arr[i] = String.fromCharCode(j);
                    let w = arr.join('');
                    if(set.has(w)){
                        q.push([w , count+1]);
                        set.delete(w);
                    }
                }
            }
        }
        return 0
    }
}
