/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let a = start ^ goal;
    let count = 0;

    while (a !== 0) {
        if (a & 1) {
            count++;
        }

        a = a >> 1;
    }

    return count;
};