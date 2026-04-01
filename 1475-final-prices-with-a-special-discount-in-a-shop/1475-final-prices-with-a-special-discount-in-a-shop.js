/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[i] <= prices[stack[stack.length - 1]]) {
            let idx = stack.pop();
            prices[idx] -= prices[i];
        }

        stack.push(i);
    }

    return prices
};