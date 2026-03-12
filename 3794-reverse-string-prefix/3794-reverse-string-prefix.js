/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function (s, k) {
    let newS = '';
    for (let i = k - 1; i >= 0; i--) {
        newS += s[i];
    }

    for (let j = k; j < s.length; j++) {
        newS += s[j];
    }

    return newS
};