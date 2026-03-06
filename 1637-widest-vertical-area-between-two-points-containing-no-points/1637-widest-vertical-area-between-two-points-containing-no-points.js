/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    const xs = points.map(p => p[0]);

    xs.sort((a, b) => a - b);

    let maxGap = 0;

    for (let i = 1; i < xs.length; i++) {
        maxGap = Math.max(maxGap, xs[i] - xs[i - 1]);
    }

    return maxGap;
};