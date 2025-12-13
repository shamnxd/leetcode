/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
    let totalSum = 0;

    for (const num of nums) {
        totalSum += num;
    }

    if (totalSum % 2 !== 0) {
        return 0;
    }

    return nums.length - 1;
};