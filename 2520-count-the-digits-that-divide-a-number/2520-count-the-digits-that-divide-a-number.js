/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    let count = 0;
    const digits = num.toString();

    for (let ch of digits) {
        const digit = Number(ch);
        if (digit !== 0 && num % digit === 0) {
            count++;
        }
    }

    return count;
};