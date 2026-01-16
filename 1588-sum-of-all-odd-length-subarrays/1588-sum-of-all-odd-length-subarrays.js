/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let n = arr.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let totalSubarrays = (i + 1) * (n - i);
        let oddSubarrays = Math.ceil(totalSubarrays / 2);
        sum += arr[i] * oddSubarrays;
    }

    return sum;
};