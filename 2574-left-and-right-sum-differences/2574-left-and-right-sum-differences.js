/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let nArr = [];

    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let k = i; k < nums.length; k++) {
            rightSum += nums[k];
        }

        for (let j = i; j >= 0; j--) {
            leftSum += nums[j]
        }

        nArr.push(Math.abs(leftSum - rightSum));
    }

    return nArr;
};