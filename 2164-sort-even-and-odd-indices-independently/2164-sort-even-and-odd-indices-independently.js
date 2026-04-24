/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let even = [];
    let odd = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }

    even.sort((a, b) => a - b);

    odd.sort((a, b) => b - a);

    let e = 0, o = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            nums[i] = even[e++];
        } else {
            nums[i] = odd[o++];
        }
    }

    return nums;
};