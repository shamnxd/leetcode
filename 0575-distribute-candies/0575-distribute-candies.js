/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let newSet = [...new Set(candyType)]
    let n = candyType.length / 2
    if (newSet.length >= n) {
        return n
    } else {
        return newSet.length
    }
};