/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const n = grid.length;
    const freq = new Array(n * n + 1).fill(0);

    for (let row of grid) {
        for (let val of row) {
            freq[val]++;
        }
    }

    let repeated = -1;
    let missing = -1;

    for (let i = 1; i <= n * n; i++) {
        if (freq[i] === 2) repeated = i;
        else if (freq[i] === 0) missing = i;
    }

    return [repeated, missing];
};