/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    return new Set(s).size;
};