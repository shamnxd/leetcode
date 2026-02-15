/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let freq = {}
    for (let val of s) {
        freq[val] = (freq[val] || 0) + 1
    }

    let occ = freq[s[0]]
    for (let val in freq) {
        if (freq[val] !== occ) {
            return false
        }
    }
    return true
};