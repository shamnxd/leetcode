/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    const digits = String(num)
        .split('')
        .map(Number)
        .sort((a, b) => a - b);

    const new1 = digits[0] * 10 + digits[2];
    const new2 = digits[1] * 10 + digits[3];

    return new1 + new2;

};