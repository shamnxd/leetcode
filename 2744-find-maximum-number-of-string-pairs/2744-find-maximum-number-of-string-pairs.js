/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i; j < words.length; j++) {
            if (i != j && words[i].length === words[j].length) {
                if (words[i] == words[j].split('').reverse().join('')) {
                    count++;
                }
            }
        }
    }

    return count;
};