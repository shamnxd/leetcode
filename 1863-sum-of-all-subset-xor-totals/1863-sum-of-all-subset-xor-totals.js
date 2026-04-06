/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let or = 0;

    for (let num of nums) {
        or |= num;
    }

    return or * (1 << (nums.length - 1));
};