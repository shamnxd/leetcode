/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function (nums) {
    const right = new Map();
    const left = new Map();
    let ans = 0;

    for (let x of nums) {
        right.set(x, (right.get(x) || 0) + 1);
    }

    for (let j = 0; j < nums.length; j++) {
        let middle = nums[j];
        right.set(middle, right.get(middle) - 1);

        let target = middle * 2;

        let leftCount = left.get(target) || 0;
        let rightCount = right.get(target) || 0;

        ans += leftCount * rightCount;

        left.set(middle, (left.get(middle) || 0) + 1);
    }

    return ans % 1000000007;
};
