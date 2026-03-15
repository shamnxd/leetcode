/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let weeks = Math.floor(n / 7);
    let days = n % 7;

    let full = weeks * 28 + 7 * (weeks * (weeks - 1) / 2);

    let rem = days * (weeks + 1) + (days * (days - 1) / 2);

    return full + rem;
};