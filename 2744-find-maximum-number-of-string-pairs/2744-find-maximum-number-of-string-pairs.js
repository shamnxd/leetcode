/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let set = new Set();
    let count = 0;

    for (let word of words) {
        let rev = word[1] + word[0];

        if (set.has(rev)) {
            count++;
        } else {
            set.add(word);
        }
    }

    return count;
};