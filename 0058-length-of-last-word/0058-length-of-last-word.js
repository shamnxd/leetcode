/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let last = s.trim().split(' ').pop().length
    return last;
};