1/**
2 * @param {number[]} heights
3 * @return {number}
4 */
5var heightChecker = function (heights) {
6    const expected = [...heights].sort((a, b) => a - b);
7    let count = 0;
8
9    for (let i = 0; i < heights.length; i++) {
10        if (heights[i] !== expected[i]) {
11            count++;
12        }
13    }
14
15    return count;
16};
17