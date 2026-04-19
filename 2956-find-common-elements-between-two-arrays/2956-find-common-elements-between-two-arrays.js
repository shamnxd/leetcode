/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let answer1 = 0;
    let answer2 = 0;

    for (let num of nums1) {
        if (set2.has(num)) {
            answer1++;
        }
    }

    for (let num of nums2) {
        if (set1.has(num)) {
            answer2++;
        }
    }

    return [answer1, answer2];
};