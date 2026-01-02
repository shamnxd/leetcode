/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    const dx = Math.abs(x - z);
    const dy = Math.abs(y - z);
    if (dx === dy) return 0;
    return dx < dy ? 1 : 2;
};