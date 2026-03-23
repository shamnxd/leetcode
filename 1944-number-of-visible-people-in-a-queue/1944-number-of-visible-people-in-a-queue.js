/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
    const n = heights.length;
    const ans = new Array(n).fill(0);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
        let count = 0;

        while (stack.length && stack[stack.length - 1] < heights[i]) {
            stack.pop();
            count++;
        }

        if (stack.length) count++;

        ans[i] = count;
        stack.push(heights[i]);
    }

    return ans;
};