/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    piles.sort((a, b) => a - b);

    let n = piles.length;
    let result = 0;

    for (let i = n - 2, count = 0; count < n / 3; i -= 2, count++) {
        result += piles[i];
    }

    return result;
};