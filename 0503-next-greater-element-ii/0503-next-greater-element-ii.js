/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let n = nums.length;
    let res = Array(nums.length).fill(-1);
    let stack = [];

    for (let i = 0; i < n * 2; i++) {
        let num = nums[i % n];

        while (stack.length && nums[stack[stack.length - 1]] < num) {
            let idx = stack.pop();
            res[idx] = num;
        }

        if (i < n) {
            stack.push(i);
        }
    }

    return res;
};