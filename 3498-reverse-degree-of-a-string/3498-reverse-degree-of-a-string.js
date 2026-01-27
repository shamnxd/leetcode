/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let degree = 0;

    for (let i = 0; i < s.length; i++) {
        let position = s.charCodeAt(i) - 96; // a=1, b=2, ...
        let reversePosition = 26 - position + 1;
        degree += reversePosition * (i + 1);
    }

    return degree;
};