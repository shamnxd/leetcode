/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;

    let l = 0, r = 1;
    while (r < prices.length) {
        if (prices[l] > prices[r]) {
            l = r;
        } else {
            max = Math.max(max, prices[r] - prices[l])
        }
        r++;
    }
    return max
};