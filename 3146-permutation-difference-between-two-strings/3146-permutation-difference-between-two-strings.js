/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
    const pos = {};

    for (let i = 0; i < s.length; i++) {
        pos[s[i]] = i;
    }

    let diff = 0;

    for (let i = 0; i < t.length; i++) {
        diff += Math.abs(pos[t[i]] - i);
    }

    return diff;
};