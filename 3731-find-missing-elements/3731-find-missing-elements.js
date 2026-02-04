/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    let missingNumbers = [];
    for (let i = Math.min(...nums); i < Math.max(...nums); i++) {
        if (!nums.includes(i)) missingNumbers.push(i);
    }

    return missingNumbers;
};