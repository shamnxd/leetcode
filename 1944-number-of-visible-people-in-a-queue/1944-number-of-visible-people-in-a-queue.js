/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
    let res = Array(heights.length).fill(0);
    let stack = [];

    for (let i = heights.length - 1; i >= 0; i--) {
        let count = 0;
        while (stack.length && stack[stack.length - 1] < heights[i]) {
            stack.pop();
            count++;
        }

        if (stack.length) count++;
        res[i] = count;

        stack.push(heights[i]);
    }

    return res;
};