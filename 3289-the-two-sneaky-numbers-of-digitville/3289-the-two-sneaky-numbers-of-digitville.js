/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    const n = nums.length - 2;
    const freq = new Array(n).fill(0);
    const res = [];

    for (let num of nums) {
        freq[num]++;

        if (freq[num] === 2) {
            res.push(num);
        }
    }

    return res;
};