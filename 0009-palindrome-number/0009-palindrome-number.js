/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = String(x);
    let newX = x.split('').reverse().join('');
    if(newX == x) {
        return 1;
    } else {
        return 0;
    }
};