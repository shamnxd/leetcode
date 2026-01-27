/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
        let digits = num.toString().split("");

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === '6') {
            digits[i] = '9';
            break; // change only one digit
        }
    }

    return Number(digits.join(""));
};