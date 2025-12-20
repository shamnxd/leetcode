/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let operations = 0;

    for (let num of nums) {
        if (num % 3 !== 0) {
            operations++;
        }
    }

    return operations
};