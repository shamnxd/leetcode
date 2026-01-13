/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let s3 = s1 + " " + s2
    let arr = s3.split(' ')
    let freq = {}
    let result = []
    for (let word of arr) {
        freq[word] = (freq[word] || 0) + 1
    }
    for (let word in freq) {
        if (freq[word] == 1) {
            result.push(word)
        }
    }
    return result
};